import React, { useEffect } from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import { trackBlogPostView } from '@site/src/utils/posthog';

export default function BlogPostTracker({ children }) {
  const { metadata } = useBlogPost();

  useEffect(() => {
    if (metadata) {
      // Track blog post view
      trackBlogPostView(
        metadata.title,
        metadata.permalink,
        metadata.tags?.map(tag => tag.label) || []
      );
    }
  }, [metadata]);

  return <>{children}</>;
}
