# Comprehensive Code Review: mcclowes.com

**Reviewer**: Principal Software Engineer
**Date**: December 2024
**Verdict**: This codebase has significant structural and quality issues that would concern any senior engineer joining the team.

---

## Executive Summary

This is a personal Docusaurus site with custom components, PostHog analytics, and various interactive features. While functional, the codebase suffers from:

- **Inconsistent patterns** across components
- **Serious security vulnerabilities** in environment handling
- **Fragile state management** and race conditions
- **Near-absent test coverage** (~3 test files for ~25 components)
- **TypeScript completely absent** despite being the preferred stack
- **Accessibility issues** despite some efforts
- **Code duplication** and poor abstractions

---

## Table of Contents

1. [Critical Security Issues](#1-critical-security-issues)
2. [Architectural Problems](#2-architectural-problems)
3. [Component-Level Issues](#3-component-level-issues)
4. [Testing Deficiencies](#4-testing-deficiencies)
5. [Performance Concerns](#5-performance-concerns)
6. [Accessibility Gaps](#6-accessibility-gaps)
7. [Code Quality Issues](#7-code-quality-issues)
8. [Edge Cases Not Handled](#8-edge-cases-not-handled)
9. [Recommendations for Junior Engineers](#9-recommendations-for-junior-engineers)

---

## 1. Critical Security Issues

### 1.1 Environment Variable Exposure (CRITICAL)

**File**: `scripts/generate-env.js:23-42`

```javascript
// This script dumps ALL .env variables to a public JavaScript file
const envVars = {};
envContent.split('\n').forEach((line) => {
  // ... parses everything
});

// Writes to static/env.js - PUBLICLY ACCESSIBLE
const envJsContent = `window.__ENV__ = {
${Object.entries(envVars)
  .map(([key, value]) => `  ${key}: '${value}'`)
  .join(',\n')}
};
```

**Problem**: This script blindly copies ALL environment variables to a client-accessible file. If someone adds `DATABASE_URL`, `API_SECRET`, or any sensitive key to `.env`, it becomes publicly visible.

**What juniors should learn**:
- Never expose all environment variables to the client
- Explicitly whitelist only the variables needed client-side
- Use a prefix convention like `NEXT_PUBLIC_` or `VITE_` to differentiate

**Fix**: Create an allowlist of safe variables:
```javascript
const ALLOWED_CLIENT_VARS = ['POSTHOG_KEY', 'POSTHOG_HOST'];
const envVars = {};
// Only include whitelisted vars
```

### 1.2 No Input Validation on External Embeds

**Files**: `src/components/Arcade/index.js`, `src/components/Loom/index.js`, `src/components/PDFViewer/index.js`

```javascript
// Arcade component - accepts any URL without validation
<iframe src={url} ... />

// Loom only checks prefix but doesn't sanitize
const isValidSource = source.startsWith('https://www.loom.com/embed/');
<iframe src={source} ... />

// PDFViewer - no validation at all
<iframe src={src} ... />
```

**Problem**: While iframes are sandboxed, allowing arbitrary URLs can lead to:
- Clickjacking attempts if not properly sandboxed
- Phishing if users are tricked into entering credentials
- Content injection attacks

**What juniors should learn**: Always validate external URLs against an allowlist of trusted domains, especially for embedded content.

---

## 2. Architectural Problems

### 2.1 No TypeScript Despite Being "Preferred"

The `CLAUDE.md` states "Prefer TypeScript where possible" but the entire codebase is JavaScript. This is a significant gap for a project that wants to be maintainable.

**Impact**:
- No compile-time type checking
- IDE autocompletion is guesswork
- Refactoring is dangerous
- Props are undocumented

**Example of missing types** (`src/components/HoloCardsGrid/index.js:17-25`):
```javascript
function HoloCard({
  src,
  alt,
  maskMode,        // What are valid values?
  gradient = 'radial',  // Which gradients exist?
  palette = 'classic',  // What palettes are available?
  texture,
  overlay,
}) {
```

A developer has to read 80 lines of code to understand what values are valid.

### 2.2 Inconsistent Module Patterns

The codebase mixes:
- ESM (`import/export`) in components
- CommonJS (`require/module.exports`) in plugins and tests
- Named exports, default exports, and mixed exports inconsistently

**Example**: `src/plugins/posthog-plugin.js:15`
```javascript
module.exports = posthogPlugin;  // CommonJS
```

While `src/utils/posthog.js:98`:
```javascript
export default posthog;  // ESM with mixed named exports
```

### 2.3 PostHog Integration is Fragile

The PostHog setup spans 5 files with tangled dependencies:

```
src/plugins/posthog-plugin.js
  └── src/clientModules/posthog.js
      └── src/config/posthog.js
src/utils/posthog.js
src/hooks/usePostHog.js
```

**Problems**:
1. `src/utils/posthog.js` imports `posthog` but also checks `window.posthog`
2. `src/hooks/usePostHog.js:16-21` uses polling to check if PostHog is loaded:

```javascript
const checkPostHog = () => {
  if (typeof window !== 'undefined' && window.posthog) {
    setIsLoaded(true);
  } else {
    setTimeout(checkPostHog, 100);  // Polls every 100ms forever!
  }
};
```

**Issues**:
- No max retry limit - will poll forever if PostHog fails to load
- Memory leak potential
- Battery drain on mobile

**What juniors should learn**: Polling is almost always wrong. Use events, promises, or observables instead.

### 2.4 LocalStorage Monkey-Patching

**File**: `src/clientModules/posthog.js:137-163`

```javascript
function patchLocalStorageObservers() {
  const { localStorage } = window;
  const originalSetItem = localStorage.setItem.bind(localStorage);

  localStorage.setItem = (key, value) => {
    const result = originalSetItem(key, value);
    if (key === STORAGE_KEY) {
      handleConsentChange(parsePreferences(value));
    }
    return result;
  };
```

**Problem**: Monkey-patching browser APIs is extremely fragile:
- Other libraries may also patch localStorage
- Order of patching matters
- Can break in subtle ways with browser updates
- Makes debugging nearly impossible

**What juniors should learn**: Prefer the standard `storage` event listener or use a proper state management solution.

---

## 3. Component-Level Issues

### 3.1 TrackedComponent Has No Semantic HTML

**File**: `src/components/TrackedComponent/index.js:25-29`

```javascript
return (
  <div className={className} onClick={handleClick} {...props}>
    {children}
  </div>
);
```

**Problems**:
- Always renders a `<div>` regardless of content
- Click handler on a div is not keyboard accessible
- No `role`, `tabIndex`, or keyboard event handling
- Spreading `...props` can introduce security issues

### 3.2 GitHubRepoCard and NpmPackageCard Have Duplicate Code

**Files**: `src/components/GitHubRepoCard/index.js` and `src/components/NpmPackageCard/index.js`

Both components have identical:
- `formatNumber` function
- State management pattern (`data`, `error`, `loading`)
- Fetch effect structure
- Error handling
- Card layout structure

**What juniors should learn**: When you copy-paste a component and change a few strings, that's a code smell. Extract the shared logic into a reusable hook or base component.

### 3.3 PokemonDetail Shows Random Values

**File**: `src/components/PokemonDetail/index.js:26-29`

```javascript
<span className={styles.statValue}>{(Math.random() * 2 + 0.5).toFixed(1)}m</span>
// ...
<span className={styles.statValue}>{(Math.random() * 50 + 10).toFixed(1)}kg</span>
```

**Problem**: This generates new random values on every render. The height and weight will change:
- When the component re-renders
- When the user scrolls
- When state changes anywhere

This is likely a placeholder that was never completed.

**What juniors should learn**: Never use `Math.random()` in render. If you need random values, generate them once (in state initialization, useMemo, or parent component) and pass them down.

### 3.4 Carousel Has Race Conditions

**File**: `src/components/Carousel/index.js:26-44`

```javascript
useEffect(() => {
  const wrapper = wrapperRef.current;
  if (wrapper) {
    wrapper.addEventListener('scroll', handleScroll);

    // Magic number delay
    const timer = setTimeout(() => {
      // ... scroll state calculation
    }, 100);
```

And again at lines 47-55:
```javascript
useEffect(() => {
  if (loadedImages === images.length && wrapperRef.current) {
    const timer = setTimeout(() => {
      handleScroll();
    }, 50);  // Different magic number
```

**Problems**:
- Two different setTimeout delays (100ms and 50ms) with no explanation
- Race condition: what if images load before the 100ms timeout?
- `handleScroll` is not in the dependency array of the first effect
- Memory leak: timers aren't always cleaned up on rapid re-renders

### 3.5 HoloCardsGrid is Over-Engineered

**File**: `src/components/HoloCardsGrid/index.js`

This 364-line component has:
- 23 palette variations
- 8 texture variations
- 8 gradient/shine variations
- 4 mask modes
- Gyroscope/device motion support
- Pointer capture handling

**Problems**:
- Zero documentation on what combinations work
- No tests
- CSS class names are computed in 80+ lines of `useMemo`
- Silent error swallowing: `catch (_) { /* noop */ }`

### 3.6 Lottie Component Named "App"

**File**: `src/components/Lottie/index.js:9`

```javascript
const App = (props) => {
```

The component is exported as `App` internally but the file is `Lottie`. This is confusing for debugging and stack traces.

---

## 4. Testing Deficiencies

### 4.1 Only 3 Test Files for ~25 Components

**Tested**:
- `ColorGrid` (3 tests)
- `Carousel` (7 tests)
- `Modal` (5 tests)

**Not tested** (partial list):
- All PostHog tracking (`usePostHog`, `trackEvent`, etc.)
- `GitHubRepoCard` / `NpmPackageCard` (network requests!)
- `TrackedComponent` / `TrackedLink`
- `LocalStorageChecklist` (localStorage interactions!)
- `Pokedex` (filtering, modal integration)
- `HoloCardsGrid` (complex pointer handling)
- `BlogPostTracker`
- Environment variable generation script

### 4.2 Tests Only Use Static Rendering

All tests use `renderToStaticMarkup`:

```javascript
const markup = renderToStaticMarkup(React.createElement(Carousel, { images }));
```

**What's not tested**:
- User interactions (clicks, keyboard)
- useEffect hooks
- State changes
- Event handlers
- Async behavior
- Error states

**What juniors should learn**: Static render tests only verify initial HTML output. Real testing requires `@testing-library/react` with `render`, `fireEvent`, and `waitFor`.

### 4.3 No Integration Tests

The cookie consent → PostHog initialization flow is completely untested. This is critical business logic:
- User grants consent → PostHog should initialize
- User revokes consent → PostHog should shutdown
- Edge cases: corrupt localStorage, race conditions, etc.

---

## 5. Performance Concerns

### 5.1 Four Google Font Imports

**File**: `src/css/custom.css:7-10`

```css
@import url('https://fonts.googleapis.com/css2?family=Merriweather...');
@import url('https://fonts.googleapis.com/css2?family=Poppins...');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono...');
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua...');
```

**Problems**:
- 4 separate HTTP requests (render-blocking)
- Poppins loads 18 font weights (100-900, normal+italic)
- Most weights are likely unused

**What juniors should learn**:
- Combine font requests where possible
- Only load the weights you actually use
- Consider `font-display: swap` for better perceived performance
- Prefer self-hosting fonts for control

### 5.2 No Image Optimization Strategy

While `@docusaurus/plugin-ideal-image` is configured, the `Carousel`, `Masonry`, and `HoloCardsGrid` components all use raw `<img>` tags:

```javascript
// Masonry/index.js:16-20
<img
  src={image}
  alt={`Image ${index + 1}`}
  loading="lazy"
/>
```

No width/height attributes = layout shift. No srcset = no responsive images.

### 5.3 Unnecessary Re-renders in usePageTracking

**File**: `src/hooks/usePostHog.js:52-60`

```javascript
export const usePageTracking = (pageName, properties = {}) => {
  const { isLoaded, trackPageView } = usePostHog();

  useEffect(() => {
    if (isLoaded && pageName) {
      trackPageView(pageName, properties);
    }
  }, [isLoaded, pageName, properties, trackPageView]);
};
```

**Problem**: `properties = {}` creates a new object on every render, causing the effect to re-run constantly.

**Usage** in `src/pages/index.js:11-14`:
```javascript
usePageTracking('Homepage', {
  page_type: 'homepage',
  timestamp: new Date().toISOString(),  // New value every render!
});
```

This will spam PostHog with duplicate pageview events.

---

## 6. Accessibility Gaps

### 6.1 ColorGrid is Not Keyboard Accessible

**File**: `src/components/HomepageHeader/index.js:43-58`

```javascript
<div
  className={styles.grid}
  data-testid="color-grid"
  style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}
>
  {opacities.map((opacity, index) => (
    <div
      key={index}
      className={...}
      style={{ opacity }}
      onClick={() => handleSquareClick(index)}  // No keyboard support!
    />
  ))}
</div>
```

**Missing**:
- No `tabIndex`
- No `onKeyDown` handler
- No `role="button"` or appropriate ARIA
- No focus visible styles
- Purely visual interaction (opacity) with no alternative for screen readers

### 6.2 Masonry Gallery Has Generic Alt Text

**File**: `src/components/Masonry/index.js:17-20`

```javascript
<img
  src={image}
  alt={`Image ${index + 1}`}  // Useless for screen readers
  ...
/>
```

"Image 1", "Image 2" tells a blind user nothing about the content.

### 6.3 TrackedLink Missing rel="noopener"

**File**: `src/components/TrackedLink/index.js:13-17`

```javascript
return (
  <a href={href} className={className} onClick={handleClick} {...props}>
    {children}
  </a>
);
```

External links should have `target="_blank" rel="noopener noreferrer"` for security and accessibility. This component has neither.

### 6.4 Modal Focus Trap Has Issues

**File**: `src/components/Modal/index.js:17-21`

```javascript
const focusableElements = modalRef.current.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];
```

**Edge cases not handled**:
- What if there are no focusable elements?
- What if all focusable elements are disabled?
- What if focusable elements change while modal is open?

---

## 7. Code Quality Issues

### 7.1 Hardcoded CSS Class Names

**File**: `src/components/LocalStorageChecklist/index.js:36-37`

```javascript
<ul
  className="contains-task-list containsTaskList_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Ul-styles-module"
```

This hardcoded class name:
- Is fragile (will break if Docusaurus updates)
- Is unmaintainable (nobody understands where it came from)
- Couples the component tightly to Docusaurus internals

### 7.2 Missing Error Boundaries

No component has error boundary protection. If `GitHubRepoCard` fails to parse API response, the entire page crashes.

### 7.3 Console Warnings in Production

**File**: `src/clientModules/posthog.js:104-106`

```javascript
} catch (error) {
  console.warn('[posthog] Failed to parse cookie consent preferences', error);
  return null;
}
```

Console warnings in production are noise. Use proper error reporting or remove them.

### 7.4 Inconsistent Export Patterns

Some components use named exports:
```javascript
// HomepageHeader/index.js
export const createOpacityGrid = ...
export function ColorGrid ...
export default HomepageHeader;
```

Others use only default:
```javascript
// Arcade/index.js
export default Arcade;
```

Pick a pattern and stick with it.

---

## 8. Edge Cases Not Handled

### 8.1 GitHubRepoCard/NpmPackageCard - API Rate Limiting

GitHub API has rate limits (60 req/hour unauthenticated). If a page has multiple cards or the user refreshes frequently:
- Requests will fail with 403
- User sees "Error" with no explanation
- No retry logic
- No caching

### 8.2 LocalStorageChecklist - Storage Quota

**File**: `src/components/LocalStorageChecklist/index.js:29`

```javascript
localStorage.setItem(prefix, checkedKeys.join(','));
```

**Not handled**:
- localStorage quota exceeded (throws in Safari private mode)
- localStorage unavailable (throws in some contexts)
- Malformed data in localStorage

### 8.3 Carousel - Empty Images Array

While tested, the empty state renders:
```jsx
<div role="region" aria-label="Image carousel">
  <div role="group" aria-label="Carousel images">
    {/* Nothing */}
  </div>
</div>
```

Should probably return `null` or show an empty state message.

### 8.4 PostHog - Cookie Consent Never Given

If a user never interacts with cookie consent:
- `readStoredPreferences()` returns `null`
- `hasAnalyticsConsent(null)` returns `false`
- PostHog never initializes
- All tracking silently fails

This is probably intended, but there's no way to know if tracking is working or silently failing.

### 8.5 Giscus - GitHub API Failure

The `GiscusComponent` makes no attempt to handle:
- GitHub being down
- User not logged in
- Repository not existing
- Network errors

It will render a broken iframe.

### 8.6 Environment Variables Missing

**File**: `src/config/posthog.js:14`

```javascript
key: getEnvVar('POSTHOG_KEY', 'phc-your-project-key-here'),
```

If `POSTHOG_KEY` is missing:
- PostHog initializes with placeholder key
- All events go to a non-existent project
- No error, no warning
- Analytics silently broken

---

## 9. Recommendations for Junior Engineers

### Pattern 1: Always Handle Loading, Error, and Empty States

```javascript
// ❌ Bad - only handles success
return <div>{data.name}</div>;

// ✅ Good - handles all states
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} onRetry={refetch} />;
if (!data || data.length === 0) return <EmptyState />;
return <div>{data.name}</div>;
```

### Pattern 2: Validate Props

```javascript
// ❌ Bad - trusts all input
const PDFViewer = ({ src }) => {
  return <iframe src={src} />;
};

// ✅ Good - validates input
const PDFViewer = ({ src }) => {
  if (!src || !src.startsWith('https://')) {
    return <div>Invalid PDF source</div>;
  }
  return <iframe src={src} />;
};
```

### Pattern 3: Clean Up Side Effects

```javascript
// ❌ Bad - potential memory leak
useEffect(() => {
  const timer = setTimeout(doSomething, 1000);
}, []);

// ✅ Good - cleaned up
useEffect(() => {
  const timer = setTimeout(doSomething, 1000);
  return () => clearTimeout(timer);
}, []);
```

### Pattern 4: Use TypeScript

```typescript
// ❌ JavaScript - hope you guessed the props right
function HoloCard({ maskMode, gradient, palette }) { ... }

// ✅ TypeScript - self-documenting
type MaskMode = 'luminance' | 'alpha' | 'refined-alpha' | 'none';
type Gradient = 'radial' | 'linear' | 'sweep' | 'star';
type Palette = 'classic' | 'cool' | 'warm' | 'aurora'; // etc

interface HoloCardProps {
  src: string;
  alt: string;
  maskMode?: MaskMode;
  gradient?: Gradient;
  palette?: Palette;
}

function HoloCard({ src, alt, maskMode = 'luminance' }: HoloCardProps) { ... }
```

### Pattern 5: Don't Swallow Errors

```javascript
// ❌ Bad - silent failure
try {
  doSomething();
} catch (_) {
  /* noop */
}

// ✅ Good - at least log in development
try {
  doSomething();
} catch (error) {
  if (process.env.NODE_ENV === 'development') {
    console.error('Failed to do something:', error);
  }
  // Optionally: send to error reporting service
}
```

### Pattern 6: Test Behavior, Not Implementation

```javascript
// ❌ Bad - tests implementation details
test('calls setData with response', () => {
  // Testing internal state management
});

// ✅ Good - tests user-visible behavior
test('displays repository name after loading', async () => {
  render(<GitHubRepoCard repo="owner/repo" />);
  expect(await screen.findByText('owner/repo')).toBeInTheDocument();
});

test('shows error message when API fails', async () => {
  mockFetch.mockRejectedValue(new Error('API Error'));
  render(<GitHubRepoCard repo="owner/repo" />);
  expect(await screen.findByText('Error')).toBeInTheDocument();
});
```

---

## Summary of Priority Fixes

### Immediate (Security)
1. Fix `generate-env.js` to whitelist environment variables
2. Add URL validation to embed components

### High Priority (Stability)
3. Add max retry limit to PostHog polling
4. Fix `usePageTracking` to not create objects in render
5. Add error boundaries to critical components

### Medium Priority (Quality)
6. Migrate to TypeScript
7. Add comprehensive tests with React Testing Library
8. Extract shared logic from GitHubRepoCard/NpmPackageCard
9. Fix PokemonDetail random values
10. Add proper accessibility to ColorGrid and TrackedComponent

### Low Priority (Maintenance)
11. Consolidate PostHog files
12. Remove hardcoded Docusaurus class names
13. Optimize font loading
14. Add proper image dimensions to carousels/galleries

---

*This review is intended to be constructive. Every codebase has issues - the goal is to learn from them and prevent them in future work.*
