# Giscus Comments Setup Guide

This guide explains how to complete the setup for Giscus comments on your blog.

## Overview

Giscus is a comments system powered by GitHub Discussions. It allows visitors to leave comments on your blog posts using their GitHub accounts. The system is already integrated into this site, but requires configuration to work.

## Prerequisites

✅ **Already completed:**

- `@giscus/react` package installed
- Giscus component created at `/src/components/GiscusComponent/index.jsx`
- BlogPostItem wrapper created at `/src/theme/BlogPostItem/index.js`

⚠️ **Still needed:**

1. Enable GitHub Discussions on your repository
2. Get your Giscus configuration IDs
3. Update the Giscus component with your IDs

## Step 1: Enable GitHub Discussions

1. Go to https://github.com/mcclowes/mcclowes.com/settings
2. Scroll down to the "Features" section
3. Check the box next to "Discussions"
4. Click "Set up discussions" and create a welcome post (optional)

## Step 2: Install Giscus GitHub App

1. Go to https://github.com/apps/giscus
2. Click "Install"
3. Select your repository: `mcclowes/mcclowes.com`
4. Click "Install"

## Step 3: Get Your Configuration IDs

1. Visit https://giscus.app
2. In the "Configuration" section:
   - **Repository:** Enter `mcclowes/mcclowes.com`
   - The tool will verify your repository meets the criteria:
     - ✅ The repository is public
     - ✅ The giscus app is installed
     - ✅ Discussions feature is enabled
3. Scroll down to see your generated configuration
4. Copy the following values:
   - `data-repo-id` → This is your **REPO_ID**
   - `data-category` → Usually "General" or "Announcements"
   - `data-category-id` → This is your **CATEGORY_ID**

## Step 4: Update the Giscus Component

Open `/src/components/GiscusComponent/index.jsx` and replace the placeholder values:

```jsx
<Giscus
  repo="mcclowes/mcclowes.com"
  repoId="YOUR_REPO_ID" // ← Replace with your actual repo ID
  category="General" // ← Replace with your chosen category
  categoryId="YOUR_CATEGORY_ID" // ← Replace with your actual category ID
  mapping="pathname"
  strict="0"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme={colorMode}
  lang="en"
  loading="lazy"
/>
```

### Example (with real values):

```jsx
<Giscus
  repo="mcclowes/mcclowes.com"
  repoId="R_kgDOG1234567"
  category="General"
  categoryId="DIC_kwDOG1234567"
  mapping="pathname"
  strict="0"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme={colorMode}
  lang="en"
  loading="lazy"
/>
```

## Step 5: Enable Comments on Blog Posts

To enable comments on a blog post, add `enableComments: true` to the frontmatter:

```markdown
---
title: 'Your Blog Post Title'
authors: mcclowes
tags: [tag1, tag2]
enableComments: true
---

Your blog post content...
```

## Configuration Options

### Giscus Component Options

- **mapping**: How to map blog posts to discussions
  - `pathname` (recommended): Uses the page URL path
  - `url`: Uses the full URL
  - `title`: Uses the page title
  - `og:title`: Uses the Open Graph title

- **inputPosition**: Where to place the comment input box
  - `top`: Above comments (recommended for engagement)
  - `bottom`: Below comments

- **reactionsEnabled**: Allow emoji reactions on the main post
  - `1`: Enabled (recommended)
  - `0`: Disabled

- **theme**: Matches your site's color mode automatically
  - Light mode: `light`
  - Dark mode: `dark`
  - The component uses `{colorMode}` to auto-switch

### Category Selection

When choosing a category in Giscus:

- **General**: Good for most blog comments
- **Announcements**: Read-only for visitors (you create discussion, they reply)
- **Custom category**: Create a specific "Blog Comments" category in your repo

## Testing

1. Start your development server: `npm run start`
2. Open a blog post with `enableComments: true`
3. Scroll to the bottom - you should see the Giscus comments widget
4. Try adding a test comment (requires GitHub login)

## Customization

### Styling

To customize the appearance, add a CSS module:

```css
/* src/components/GiscusComponent/styles.module.css */
.giscusContainer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--ifm-color-emphasis-200);
}
```

Then update the component:

```jsx
import styles from './styles.module.css';

export default function GiscusComponent() {
  // ...
  return (
    <div className={styles.giscusContainer}>
      <Giscus {...props} />
    </div>
  );
}
```

### Conditional Display

The current setup only shows comments when:

1. `enableComments: true` is in the post frontmatter
2. The user is viewing the full blog post page (not the list)

To show comments on ALL blog posts by default, modify `/src/theme/BlogPostItem/index.js`:

```jsx
export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && (
        <div style={{ marginTop: '2rem' }}>
          <GiscusComponent />
        </div>
      )}
    </>
  );
}
```

## Troubleshooting

### Comments not appearing?

1. **Check GitHub Discussions is enabled**: Visit your repo settings
2. **Verify giscus app is installed**: Check https://github.com/apps/giscus
3. **Confirm repo is public**: Giscus only works with public repositories
4. **Check the browser console**: Look for error messages
5. **Verify IDs are correct**: Double-check repoId and categoryId

### Wrong discussion category?

1. Go to https://giscus.app
2. Select a different category
3. Copy the new `categoryId`
4. Update `/src/components/GiscusComponent/index.jsx`

### Theme not switching?

Make sure you're using `{colorMode}` from the hook:

```jsx
const { colorMode } = useColorMode();
// ...
theme = { colorMode }; // Not theme="dark" or theme="light"
```

## Privacy & Moderation

- **Authentication**: Users must log in with GitHub to comment
- **Spam protection**: GitHub's reputation system helps reduce spam
- **Moderation**: You can moderate comments in your GitHub Discussions
- **Privacy**: Comments are stored in GitHub, not on your server
- **GDPR**: Covered by GitHub's privacy policy

## Further Reading

- [Giscus Documentation](https://github.com/giscus/giscus)
- [GitHub Discussions](https://docs.github.com/en/discussions)
- [Docusaurus Swizzling](https://docusaurus.io/docs/swizzling)

## Next Steps

1. ✅ Complete Step 1-4 above to configure Giscus
2. Add `enableComments: true` to blog posts you want to have comments
3. Test on your local development server
4. Deploy and share your blog posts with comments enabled!
