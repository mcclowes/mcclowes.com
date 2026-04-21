# marginalia-plugin

Editorial sidenotes for Docusaurus blog posts and docs. Inline anchors in prose pair with cards in the right margin that pack top-down, highlight as the reader scrolls, and collapse gracefully on narrow viewports.

## Install (local)

This plugin lives in-tree. Register it in `docusaurus.config.js`:

```js
plugins: [
  [require.resolve('./src/plugins/marginalia-plugin'), {}],
];
```

Requires `docusaurus-plugin-sass` (the components use SCSS modules).

## Usage

```mdx
import { Marginalia, Aside, Endpoint } from '@theme/Marginalia';

<Marginalia>

The concept of <Aside anchor="pattern languages" kind="concept" title="Christopher Alexander" meta={["1977", "253 patterns"]}>*A Pattern Language* catalogued 253 design patterns for towns and buildings.</Aside> has shaped software thinking.

</Marginalia>
```

## Components

### `<Marginalia>`

Container establishing the two-column reading layout. Props:

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `showProgress` | `boolean` | `true` | Sticky "Now reading" pill + scroll progress bar |

### `<Aside>`

Inline anchor paired with a margin card. Props:

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `anchor` | `ReactNode` | `children` | Inline text in prose (if omitted, children is used) |
| `title` | `string` | — | Card heading |
| `kind` | `'note' \| 'concept' \| 'warning' \| 'info' \| 'link' \| 'value' \| 'code' \| 'endpoint'` | `'note'` | Color swatch |
| `kindLabel` | `string` | Derived from `kind` | Override the uppercase label |
| `meta` | `string[]` | — | Pill tags shown below body |
| `cta` | `string` | — | Call-to-action text at bottom |
| `ctaHref` | `string` | — | CTA href. If omitted, renders as `<span>` |
| `children` | `ReactNode` | — | Card body (when `anchor` is set) or inline anchor (when not) |

### `<Endpoint>`

Inline method + path chip (GET green, POST amber, PUT/PATCH green-dark, DELETE red).

```mdx
<Endpoint method="POST" path="/users/{id}" />
```

## Behaviour

- Cards are absolutely positioned and packed top-down with a 10px gap.
- Scroll selects the anchor nearest 32% of viewport height and marks both sides `hot`.
- Hovering either side syncs the other. Clicking an anchor scrolls its card into view with a brief pulse.
- Keyboard accessible: anchors have `role="button"`, `tabindex="0"`, respond to Enter/Space.
- Below 1200px viewport width the margin column is hidden; anchors keep their native `title` tooltip.
