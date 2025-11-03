function posthogPlugin(context, options) {
  return {
    name: 'posthog-plugin',
    getClientModules() {
      return [require.resolve('../clientModules/posthog')];
    },
    injectHtmlTags() {
      return {
        headTags: [],
      };
    },
  };
}

module.exports = posthogPlugin;
