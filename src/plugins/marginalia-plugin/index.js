const path = require('path');

function marginaliaPlugin(context, options) {
  return {
    name: 'marginalia-plugin',
    getThemePath() {
      return path.resolve(__dirname, './src/theme');
    },
    getClientModules() {
      return [path.resolve(__dirname, './src/globalStyles.css')];
    },
  };
}

module.exports = marginaliaPlugin;
