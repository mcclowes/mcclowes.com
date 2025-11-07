# PostHog Analytics Setup

This document explains how to set up and use PostHog analytics on your Docusaurus website.

## Setup Instructions

### 1. Get Your PostHog Project Key

1. Go to [PostHog](https://app.posthog.com) and create an account if you don't have one
2. Create a new project or use an existing one
3. Go to Project Settings → API Keys
4. Copy your Project API Key (starts with `phc-`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
POSTHOG_KEY=phc-your-actual-project-key-here
POSTHOG_HOST=https://app.posthog.com
NODE_ENV=development
```

For production, set these as environment variables in your deployment platform.

### 3. Update Configuration

Edit `src/config/posthog.js` and replace the placeholder key with your actual PostHog project key:

```javascript
export const posthogConfig = {
  key: process.env.POSTHOG_KEY || 'phc-your-actual-project-key-here',
  // ... rest of config
};
```

## Features Included

### Automatic Tracking

- **Page Views**: Automatically tracked on all pages
- **Web Vitals**: Core Web Vitals (CLS, FID, FCP, LCP, TTFB) are tracked
- **Route Changes**: SPA navigation is tracked
- **Session Recording**: Enabled by default (can be disabled per user)

### Custom Tracking Functions

#### Event Tracking

```javascript
import { trackEvent } from '@site/src/utils/posthog';

trackEvent('button_clicked', {
  button_name: 'subscribe',
  page: 'homepage',
});
```

#### Blog Post Tracking

```javascript
import { trackBlogPostView } from '@site/src/utils/posthog';

trackBlogPostView('My Blog Post', '/blog/my-post', ['tech', 'product']);
```

#### External Link Tracking

```javascript
import { trackExternalLinkClick } from '@site/src/utils/posthog';

trackExternalLinkClick('https://example.com', 'Example Link', 'footer');
```

### React Hooks

#### usePostHog Hook

```javascript
import { usePostHog } from '@site/src/hooks/usePostHog';

function MyComponent() {
  const { trackEvent, isLoaded } = usePostHog();

  const handleClick = () => {
    if (isLoaded) {
      trackEvent('custom_event', { component: 'MyComponent' });
    }
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

#### usePageTracking Hook

```javascript
import { usePageTracking } from '@site/src/hooks/usePostHog';

function MyPage() {
  usePageTracking('My Page', {
    page_type: 'custom',
    section: 'features',
  });

  return <div>My page content</div>;
}
```

#### useFeatureFlag Hook

```javascript
import { useFeatureFlag } from '@site/src/hooks/usePostHog';

function MyComponent() {
  const showNewFeature = useFeatureFlag('new-feature', false);

  return <div>{showNewFeature && <div>New feature content</div>}</div>;
}
```

### Components

#### TrackedLink Component

```javascript
import TrackedLink from '@site/src/components/TrackedLink';

<TrackedLink href="https://example.com" source="homepage" className="my-link">
  External Link
</TrackedLink>;
```

#### TrackedComponent Component

```javascript
import TrackedComponent from '@site/src/components/TrackedComponent';

<TrackedComponent componentName="NewsletterSignup" action="click" className="newsletter-form">
  <form>...</form>
</TrackedComponent>;
```

## Privacy Considerations

- **Do Not Track**: PostHog respects the DNT header
- **GDPR Compliance**: PostHog is GDPR compliant
- **Data Retention**: Configure data retention policies in PostHog settings
- **IP Anonymization**: Can be enabled in PostHog settings

## Debugging

In development mode, PostHog will log events to the console. You can also access PostHog directly in the browser console:

```javascript
// Check if PostHog is loaded
window.posthog;

// Manually capture an event
window.posthog.capture('test_event', { test: true });

// Check feature flags
window.posthog.isFeatureEnabled('my-feature-flag');
```

## Production Deployment

1. Set environment variables in your deployment platform:
   - `POSTHOG_KEY`: Your PostHog project key
   - `POSTHOG_HOST`: Your PostHog host (usually `https://app.posthog.com`)
   - `NODE_ENV`: Set to `production`

2. Update your build process to include these environment variables

3. Test the integration in production by checking the PostHog dashboard

## Customization

You can customize the PostHog configuration by editing `src/config/posthog.js`. Common customizations include:

- Disabling session recording
- Changing persistence method
- Adding custom properties
- Configuring feature flags
- Setting up custom event properties

## Support

For PostHog-specific issues, check the [PostHog documentation](https://posthog.com/docs) or their [community forum](https://github.com/PostHog/posthog/discussions).
