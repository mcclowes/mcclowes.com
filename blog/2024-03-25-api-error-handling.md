---
title: 'Designing a consistent error handling pattern for APIs'
authors: mcclowes
tags: [programming, dev, api, design]
enableComments: true
---

Errors and warnings are a minefield for developers, and very inconsistently implemented across APIs. I've been thinking about what a consistent, developer-friendly approach to surfacing issues looks like — one that helps both developers and their end users.

This is focused on API responses and logs rather than native SDKs.

<!--truncate-->

## Principles

1. **The client can see what happened.** No mystery failures.
2. **The client can understand why and how to resolve it** — with links to docs, support, and related resources.
3. **The client can communicate the issue to their user.** The API should help them do this.
4. **The client isn't forced into complex change management.** Breaking changes to error shapes are painful.
5. **Issue persistence is captured where appropriate.** Some issues are transient, some are ongoing.
6. **Issue structure is consistent across contexts** — API responses, webhooks, component callbacks, UI.
7. **It's clear where action is required** vs where the issue is advisory.

## The `issues` array

All non-success API responses should include an `issues` array. This surfaces errors, warnings, and informational notices in a consistent structure, giving developers enough context to understand what went wrong, whether it's resolved, and where to go next.

Errors and warnings share the same shape and the same need — context, traceability, a path forward — so splitting them into separate arrays would force developers to check two places for information that belongs to the same moment in a request's lifecycle.

### Example response

```json
{
  "issues": [
    {
      "issue": "payment.unauthorized.token_expired",
      "severity": "error",
      "correlationId": "4b3a2c1d-0000-0000-0000-abcdef123456",
      "dateTime": "2024-11-01T12:34:56Z",
      "active": false,
      "message": {
        "title": "Payment not authorised",
        "detail": "This transaction couldn't be completed."
      },
      "links": {
        "documentation": "https://docs.example.com/errors/unauthorized",
        "portal": "https://support.example.com",
        "retry": "https://api.example.com/..."
      }
    }
  ]
}
```

## Fields

### `issue`

**Type:** `string (namespaced)` — **Required:** Yes

The single machine-readable identity of the issue. Format: `{domain}.{class}.{reason}`, read left to right from broadest to most specific — e.g. `payment.unauthorized.token_expired`, `payment.validation.missing_field`.

- **`{domain}`** — the resource or area the issue belongs to (`payment`, `verification`, `account`). Leading with it keeps codes unambiguous when issues from several resources flow through one channel, such as an aggregated webhook stream, where `unauthorized.token_expired` on its own wouldn't say _what_ was unauthorised.
- **`{class}`** — the kind of problem: `unauthorized`, `validation`, `conflict`, `rate_limit`, `internal`. The broad bucket most error handling branches on. Expand the set as the taxonomy matures.
- **`{reason}`** — the specific cause within that class: `token_expired`, `missing_field`, `invalid_format`.

This one code carries the whole classification — there is deliberately no separate `type` field. A standalone `type` would only restate the `{class}` segment, and two fields that must always agree are a bug waiting to happen. Consumers that need the class read it from the code instead.

**Parsing, and strings vs enums.** Read the code by splitting on `.` and matching prefixes — branch on `payment.unauthorized`, treat any segment you don't recognise as "more specific than I handle," and never assume a fixed depth. Keep the values as plain strings rather than a strict enum at first: the taxonomy will grow, and an exhaustive `switch` over an enum turns every new code into a breaking change for your consumers. Fall back to the `{class}` you do know, or to `severity`, when a `{reason}` is unfamiliar. Commit to an enum only once the set has genuinely stopped moving.

Namespaced codes also let you express hierarchy without proliferating top-level values — `payment.validation.missing_field` and `payment.validation.invalid_format` are obviously related, where `missing_field` and `invalid_format` in isolation are just noise.

Prefer descriptive strings to numeric status and error codes.

### `correlationId`

**Type:** `string (UUID)` — **Required:** Yes

A unique identifier for the request. Use this when raising a support ticket or querying logs — it's the fastest way to locate the issue on the server side.

The API should generate a `correlationId` for every request. If the client supplies an `X-Correlation-ID` header, that value is echoed back, allowing them to correlate server logs with their own.

### `severity`

**Type:** `enum (string)` — **Required:** Yes

Whether the issue blocks the request or is advisory.

| Value | Description |
|---|---|
| `error` | Request failed; action required |
| `warning` | Request succeeded (or partially succeeded); attention advised |
| `info` | Informational notice only |

### `dateTime`

**Type:** `ISO 8601 string` — **Required:** Yes

When the issue occurred, in UTC.

### `active`

**Type:** `boolean` — **Required:** No

Whether the issue is still ongoing. This is key where issues are persistent or stateful rather than transient. Useful for platform-level problems (e.g. a service degradation) where the issue may resolve without developer action.

The idea is that a developer can disregard issues where `active === false`.

Some real-world examples:
- A connected device goes offline — this is communicated as an active issue until the connection is re-established.
- A user's authorised access to a third-party data source expires or is revoked — this is an active issue until re-authorisation.

Omit this field if resolution state cannot be reliably tracked. A stale `active: true` is more harmful than no signal at all.

### `message`

**Type:** `object` — **Required:** No

A human-readable summary of the issue, suitable for surfacing to end users. Provided as a convenience — integrators may override this copy to match their own tone or context.

```json
{
  "message": {
    "title": "Payment not authorised",
    "detail": "This transaction couldn't be completed. Please check your card details or contact support."
  }
}
```

| Field | Description |
|---|---|
| `title` | Short, stable label. Suitable for a toast or modal heading. |
| `detail` | Fuller explanation. Suitable for inline help text or a support flow. |

Copy is not localised — provided in English only. Localisation is the integrator's responsibility.

### `thirdParty`

**Type:** `object` — **Required:** No

Present when the issue originates from a third-party service (e.g. a KYC or payment provider). Passed through as-is — the API does not transform or interpret this data.

```json
{
  "thirdParty": {
    "provider": "acme_verify",
    "code": "DOCUMENT_EXPIRED",
    "message": "The document provided has passed its expiry date."
  }
}
```

| Field | Description |
|---|---|
| `provider` | Identifier for the third-party service |
| `code` | The provider's own error code, if available |
| `message` | The provider's own error message, if available |

This data is unprocessed and may change if the underlying provider changes. Don't build logic that depends on specific `code` or `message` values — use the API's own `issue` field for that.

This information is likely **not** suitable for end users.

### `links`

**Type:** `object` — **Required:** No

Relevant links to help the developer act on the issue.

| Field | Description |
|---|---|
| `documentation` | Docs page for this error type |
| `portal` | Support portal |
| `api` | Related API endpoint (e.g. retry, related resource) |

## Consuming the pattern in React

Here's what consuming this looks like in a React application:

```tsx
import { useState } from 'react'

// Types

type IssueSeverity = 'error' | 'warning' | 'info'

interface IssueMessage {
  title: string
  detail: string
}

interface IssueLinks {
  documentation?: string
  portal?: string
  api?: string
}

interface IssueThirdParty {
  provider: string
  code?: string
  message?: string
}

interface Issue {
  issue: string
  severity: IssueSeverity
  dateTime: string
  active?: boolean
  message?: IssueMessage
  links?: IssueLinks
  thirdParty?: IssueThirdParty
}

interface ApiResponse {
  correlationId: string
  issues: Issue[]
}
```

A form component can forward issues to a parent handler:

```tsx
interface VerificationFormProps {
  onIssue: (issues: Issue[], correlationId: string) => void
}

function VerificationForm({ onIssue }: VerificationFormProps) {
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setLoading(true)

    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Correlation-ID': crypto.randomUUID(),
        },
        body: JSON.stringify({ documentType: 'passport' }),
      })

      const data: ApiResponse = await response.json()

      if (!response.ok && data.issues?.length) {
        onIssue(data.issues, data.correlationId)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleSubmit} disabled={loading}>
      {loading ? 'Verifying...' : 'Verify'}
    </button>
  )
}
```

And the parent can render errors and warnings consistently:

```tsx
export default function App() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [correlationId, setCorrelationId] = useState<string | null>(null)

  function handleIssue(issues: Issue[], correlationId: string) {
    setIssues(issues)
    setCorrelationId(correlationId)
  }

  const errors = issues.filter((i) => i.severity === 'error')
  const warnings = issues.filter((i) => i.severity === 'warning')

  return (
    <div>
      <VerificationForm onIssue={handleIssue} />

      {errors.map((issue, idx) => (
        <div key={idx} role="alert">
          <strong>{issue.message?.title ?? issue.issue}</strong>
          <p>{issue.message?.detail}</p>
          {issue.links?.documentation && (
            <a href={issue.links.documentation}>Find out more</a>
          )}
        </div>
      ))}

      {warnings.map((issue, idx) => (
        <div key={idx} role="status">
          <strong>{issue.message?.title ?? issue.issue}</strong>
          <p>{issue.message?.detail}</p>
        </div>
      ))}

      {correlationId && <small>Reference: {correlationId}</small>}
    </div>
  )
}
```

### SDK-level integration

If your API has an SDK or wrapper, you can surface issues through a provider pattern:

```tsx
function EmbedderApp() {
  function handleIssue(issues: Issue[], correlationId: string) {
    // The class is the second segment of the issue code — parse, don't store twice.
    const unauthorized = issues.find((i) => i.issue.split('.')[1] === 'unauthorized')

    if (unauthorized) {
      redirectToLogin({
        reason: unauthorized.message?.title,
        ref: correlationId,
      })
    }
  }

  return (
    <ApiProvider onIssue={handleIssue}>
      <Verification />
    </ApiProvider>
  )
}
```

## Open questions

A few things I didn't fully resolve:

- **Is the `issue` code stable enough to commit to as an enum?** Or is it better to keep it as a plain string to avoid breaking changes as the taxonomy evolves?
- **Can you reliably track `active` / resolution state?** If not, it's better deferred than implemented badly.
- **What should `links.api` point to?** A retry endpoint? A related resource? This needs clearer semantics.
- **Should `issues` appear on 2xx responses too?** There's a case for surfacing warnings alongside successful operations.
