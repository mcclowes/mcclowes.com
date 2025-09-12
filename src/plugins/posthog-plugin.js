function posthogPlugin(context, options) {
  return {
    name: 'posthog-plugin',
    getClientModules() {
      return [require.resolve('../clientModules/posthog')];
    },
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
              // Web Vitals tracking - will be loaded dynamically
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

              // Load web-vitals dynamically to avoid SSR issues
              if (typeof window !== 'undefined') {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  // Track Core Web Vitals
                  getCLS(sendToPostHog);
                  getFID(sendToPostHog);
                  getFCP(sendToPostHog);
                  getLCP(sendToPostHog);
                  getTTFB(sendToPostHog);
                }).catch(err => {
                  console.warn('Failed to load web-vitals:', err);
                });
              }
            `,
          },
        ],
      };
    },
  };
}

module.exports = posthogPlugin;
