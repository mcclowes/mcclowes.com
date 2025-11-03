import posthog from 'posthog-js';
import { posthogConfig } from '../config/posthog';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Function to send web vitals to PostHog
function sendToPostHog(metric) {
  if (window.posthog) {
    window.posthog.capture('web_vital', {
      name: metric.name,
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType
    });
  }
}

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

  // Track Core Web Vitals
  onCLS(sendToPostHog);
  onINP(sendToPostHog);
  onFCP(sendToPostHog);
  onLCP(sendToPostHog);
  onTTFB(sendToPostHog);
}

export default posthog;
