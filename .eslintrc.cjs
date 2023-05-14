module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'comma-dangle': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
  },
};
