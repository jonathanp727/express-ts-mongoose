module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off', // Disable this airbnb rule because it sucks
    'no-unused-vars': 'off', // Disable to avoid conflicts with @typescript-eslint/no-unused-vars
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
