// src - https://stackoverflow.com/a/61516728
// Accessibility -  add jsx-a11y plugin if needed.

// # Option 2
// Use create-react-app's config
// eslint-config-react-app (3 million/week)

module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'import', 'react-hooks'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/'],
  rules: {},
  settings: {
    react: {
      version: 'latest',
    },
  },
};
