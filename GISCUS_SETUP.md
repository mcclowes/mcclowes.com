# Giscus Comments Setup Guide

Giscus is a comments system powered by GitHub Discussions. It allows visitors to leave comments on blog posts using their GitHub accounts.

## Current Status

✅ **Fully configured** - Giscus is set up and working.

Component: `/src/components/GiscusComponent/index.jsx`

## Enable Comments on Blog Posts

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

## Reconfiguration

If you need to change the Giscus configuration:

1. Visit https://giscus.app
2. Enter repository `mcclowes/mcclowes.com`
3. Copy the new `repoId` and `categoryId` values
4. Update `/src/components/GiscusComponent/index.jsx`
