import posthog from 'posthog-js';
import { posthogConfig } from '../config/posthog';

// Initialize PostHog
if (typeof window !== 'undefined') {
  posthog.init(posthogConfig.key, {
    api_host: posthogConfig.host,
    debug: posthogConfig.debug,
    capture_pageview: posthogConfig.capture_pageview,
    capture_pageleave: posthogConfig.capture_pageleave,
    disable_session_recording: posthogConfig.disable_session_recording,
    bootstrap: posthogConfig.bootstrap,
    respect_dnt: posthogConfig.respect_dnt,
    persistence: posthogConfig.persistence,
    cross_subdomain_cookie: posthogConfig.cross_subdomain_cookie,
    secure_cookie: posthogConfig.secure_cookie,
  });

  // Make PostHog available globally for debugging
  window.posthog = posthog;
}

export default posthog;
