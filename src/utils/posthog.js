import posthog from 'posthog-js';

// Utility functions for PostHog tracking
export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.posthog) {
    posthog.capture(eventName, properties);
  }
};

export const identifyUser = (userId, userProperties = {}) => {
  if (typeof window !== 'undefined' && window.posthog) {
    posthog.identify(userId, userProperties);
  }
};

export const setUserProperties = (properties) => {
  if (typeof window !== 'undefined' && window.posthog) {
    posthog.people.set(properties);
  }
};

export const trackPageView = (pageName, properties = {}) => {
  if (typeof window !== 'undefined' && window.posthog) {
    posthog.capture('$pageview', {
      page: pageName,
      ...properties,
    });
  }
};

export const trackBlogPostView = (postTitle, postSlug, tags = []) => {
  trackEvent('blog_post_viewed', {
    post_title: postTitle,
    post_slug: postSlug,
    tags: tags,
    timestamp: new Date().toISOString(),
  });
};

export const trackBlogPostRead = (postTitle, postSlug, readTime) => {
  trackEvent('blog_post_read', {
    post_title: postTitle,
    post_slug: postSlug,
    read_time: readTime,
    timestamp: new Date().toISOString(),
  });
};

export const trackExternalLinkClick = (url, linkText, source) => {
  trackEvent('external_link_clicked', {
    url: url,
    link_text: linkText,
    source: source,
    timestamp: new Date().toISOString(),
  });
};

export const trackComponentInteraction = (componentName, action, properties = {}) => {
  trackEvent('component_interaction', {
    component: componentName,
    action: action,
    ...properties,
    timestamp: new Date().toISOString(),
  });
};

export const trackSearch = (query, resultsCount = 0) => {
  trackEvent('search_performed', {
    query: query,
    results_count: resultsCount,
    timestamp: new Date().toISOString(),
  });
};

export const trackDownload = (fileName, fileType, source) => {
  trackEvent('file_downloaded', {
    file_name: fileName,
    file_type: fileType,
    source: source,
    timestamp: new Date().toISOString(),
  });
};

// Feature flag utilities
export const getFeatureFlag = (flagName, defaultValue = false) => {
  if (typeof window !== 'undefined' && window.posthog) {
    return posthog.isFeatureEnabled(flagName) ?? defaultValue;
  }
  return defaultValue;
};

export const onFeatureFlag = (flagName, callback) => {
  if (typeof window !== 'undefined' && window.posthog) {
    posthog.onFeatureFlags(callback);
  }
};

export default posthog;
