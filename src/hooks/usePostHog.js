import { useEffect, useState } from 'react';
import { 
  trackEvent, 
  identifyUser, 
  setUserProperties, 
  trackPageView,
  getFeatureFlag,
  onFeatureFlag
} from '../utils/posthog';

export const usePostHog = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if PostHog is loaded
    const checkPostHog = () => {
      if (typeof window !== 'undefined' && window.posthog) {
        setIsLoaded(true);
      } else {
        setTimeout(checkPostHog, 100);
      }
    };
    
    checkPostHog();
  }, []);

  return {
    isLoaded,
    trackEvent,
    identifyUser,
    setUserProperties,
    trackPageView,
    getFeatureFlag,
    onFeatureFlag,
  };
};

export const useFeatureFlag = (flagName, defaultValue = false) => {
  const [flagValue, setFlagValue] = useState(defaultValue);
  const { isLoaded, getFeatureFlag } = usePostHog();

  useEffect(() => {
    if (isLoaded) {
      const value = getFeatureFlag(flagName, defaultValue);
      setFlagValue(value);
    }
  }, [isLoaded, flagName, defaultValue, getFeatureFlag]);

  return flagValue;
};

export const usePageTracking = (pageName, properties = {}) => {
  const { isLoaded, trackPageView } = usePostHog();

  useEffect(() => {
    if (isLoaded && pageName) {
      trackPageView(pageName, properties);
    }
  }, [isLoaded, pageName, properties, trackPageView]);
};

export default usePostHog;
