module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'max-len': ['error', { code: 80 }],
    'no-console': 'off',
    'indent': ['error', 2],
  },
};