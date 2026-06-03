const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const globals = require('globals');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      '.docusaurus/**',
      'build/**',
      'static/**',
      '.claude/**',
      '.agents/**',
      'coverage/**',
      'package-lock.json',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: '18.3' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      // eslint-plugin-react-hooks v7 folds the new React Compiler / rules-of-react
      // checks into `recommended`. They flag intentional, working patterns here
      // (the latest-ref idiom, state-sync effects), so keep them off until the code
      // is deliberately migrated. The classic rules-of-hooks and exhaustive-deps stay on.
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/purity': 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: [
      '**/*.cjs',
      'babel.config.js',
      'scripts/generate-env.js',
      'src/plugins/latest-blog-plugin.js',
      'src/plugins/posthog-plugin.js',
      'src/plugins/marginalia-plugin/index.js',
    ],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
  },
  {
    files: ['**/__tests__/**/*.{js,jsx}', '**/*.test.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
];
