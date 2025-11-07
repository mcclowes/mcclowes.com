import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import posthog from 'posthog-js';
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import { posthogConfig } from '../config/posthog';

const STORAGE_KEY = 'mcclowes-cookie-consent';
const ANALYTICS_CATEGORY = 'analytics';

let posthogInitialized = false;
let webVitalsRegistered = false;

function sendToPostHog(metric) {
  if (!posthogInitialized || typeof window === 'undefined' || !window.posthog) {
    return;
  }

  window.posthog.capture('web_vital', {
    name: metric.name,
    value: metric.value,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType,
  });
}

function registerWebVitals() {
  if (webVitalsRegistered) {
    return;
  }

  onCLS(sendToPostHog);
  onINP(sendToPostHog);
  onFCP(sendToPostHog);
  onLCP(sendToPostHog);
  onTTFB(sendToPostHog);
  webVitalsRegistered = true;
}

function initPosthog() {
  if (posthogInitialized) {
    if (typeof posthog.opt_in_capturing === 'function') {
      posthog.opt_in_capturing();
    }
    return;
  }

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

  posthogInitialized = true;
  registerWebVitals();

  if (typeof window !== 'undefined') {
    window.posthog = posthog;
  }

  if (typeof posthog.opt_in_capturing === 'function') {
    posthog.opt_in_capturing();
  }
}

function shutdownPosthog() {
  if (!posthogInitialized) {
    return;
  }

  if (typeof posthog.opt_out_capturing === 'function') {
    posthog.opt_out_capturing();
  }
  if (typeof posthog.shutdown === 'function') {
    posthog.shutdown();
  }
  if (typeof posthog.reset === 'function') {
    posthog.reset();
  }

  posthogInitialized = false;

  if (typeof window !== 'undefined') {
    delete window.posthog;
  }
}

function parsePreferences(raw) {
  if (!raw) {
    return null;
  }

  try {
    if (typeof raw === 'string') {
      return JSON.parse(raw);
    }
    return raw;
  } catch (error) {
    console.warn('[posthog] Failed to parse cookie consent preferences', error);
    return null;
  }
}

function hasAnalyticsConsent(preferences) {
  return Boolean(preferences?.[ANALYTICS_CATEGORY]);
}

function handleConsentChange(preferences) {
  if (hasAnalyticsConsent(preferences)) {
    initPosthog();
    return;
  }

  shutdownPosthog();
}

function readStoredPreferences() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return parsePreferences(stored);
  } catch (error) {
    console.warn('[posthog] Failed to read cookie consent preferences', error);
    return null;
  }
}

function patchLocalStorageObservers() {
  if (typeof window === 'undefined' || patchLocalStorageObservers.patched) {
    return;
  }

  const { localStorage } = window;
  const originalSetItem = localStorage.setItem.bind(localStorage);
  const originalRemoveItem = localStorage.removeItem.bind(localStorage);

  localStorage.setItem = (key, value) => {
    const result = originalSetItem(key, value);
    if (key === STORAGE_KEY) {
      handleConsentChange(parsePreferences(value));
    }
    return result;
  };

  localStorage.removeItem = (key) => {
    const result = originalRemoveItem(key);
    if (key === STORAGE_KEY) {
      handleConsentChange(null);
    }
    return result;
  };

  patchLocalStorageObservers.patched = true;
}

function setupStorageListener() {
  if (typeof window === 'undefined') {
    return;
  }

  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    handleConsentChange(parsePreferences(event.newValue));
  });
}

function bootstrap() {
  if (!ExecutionEnvironment.canUseDOM) {
    return;
  }

  patchLocalStorageObservers();
  setupStorageListener();
  handleConsentChange(readStoredPreferences());
}

bootstrap();

export default posthog;
