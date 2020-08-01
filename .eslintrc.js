module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
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
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Changes the resolver to use eslint-import-resolver-typescript, which is necessary for typescript files
    },
  },
};
