// PostHog Configuration
// Copy this file and rename to posthog.local.js with your actual keys

export const posthogConfig = {
  // Get your project key from https://app.posthog.com/project/settings
  key: process.env.POSTHOG_KEY || 'phc-your-project-key-here',
  
  // PostHog host (use https://app.posthog.com for cloud, or your self-hosted instance)
  host: process.env.POSTHOG_HOST || 'https://app.posthog.com',
  
  // Enable debug mode in development
  debug: process.env.NODE_ENV === 'development',
  
  // Automatically capture page views
  capture_pageview: true,
  
  // Capture page views on route changes (important for SPAs)
  capture_pageleave: true,
  
  // Disable automatic session recording by default (can be enabled per user)
  disable_session_recording: false,
  
  // Enable feature flags
  bootstrap: {
    featureFlags: {},
  },
  
  // Privacy settings
  respect_dnt: true,
  
  // Persistence settings
  persistence: 'localStorage',
  
  // Cross-subdomain tracking
  cross_subdomain_cookie: false,
  
  // Secure cookie settings
  secure_cookie: typeof window !== 'undefined' && window.location.protocol === 'https:',
};

export default posthogConfig;
