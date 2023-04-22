module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'eslint linebreak-style': [0, 'error', 'windows'],
    'linebreak-style': ['error', 'unix'],
  },
};
