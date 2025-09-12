const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

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
              // Web Vitals tracking
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

              // Track Core Web Vitals
              getCLS(sendToPostHog);
              getFID(sendToPostHog);
              getFCP(sendToPostHog);
              getLCP(sendToPostHog);
              getTTFB(sendToPostHog);
            `,
          },
        ],
      };
    },
  };
}

module.exports = posthogPlugin;
