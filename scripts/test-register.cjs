const fs = require('node:fs');
const path = require('node:path');
const { transformSync } = require('@babel/core');

const transformModules = require('@babel/plugin-transform-modules-commonjs');

const babelPreset = require.resolve('@docusaurus/core/lib/babel/preset');

const jsLoader = require.extensions['.js'];
const jsxLoader = require.extensions['.jsx'] || jsLoader;

const transformFile = (module, filename, defaultLoader) => {
  if (filename.includes(`${path.sep}node_modules${path.sep}`)) {
    return defaultLoader(module, filename);
  }

  const source = fs.readFileSync(filename, 'utf8');
  const { code } = transformSync(source, {
    filename,
    presets: [babelPreset],
    plugins: [transformModules],
    babelrc: false,
    configFile: false,
  });

  return module._compile(code, filename);
};

require.extensions['.js'] = function registerJs(module, filename) {
  return transformFile(module, filename, jsLoader);
};

require.extensions['.jsx'] = function registerJsx(module, filename) {
  return transformFile(module, filename, jsxLoader);
};

require.extensions['.css'] = function registerCss(module) {
  module.exports = new Proxy(
    {},
    {
      get: (target, property) => property,
    }
  );
};

const assetExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif'];

for (const extension of assetExtensions) {
  require.extensions[extension] = function registerAsset(module) {
    module.exports = '';
  };
}
