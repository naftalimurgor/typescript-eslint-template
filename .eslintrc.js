
// https://eslint.org/docs/latest/use/configure/
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // elsint plugins
  plugins: ['@typescript-eslint', 'prettier'],

  // all the rules to apply
  rules: {
    'no-underscore-dangle': 'off',
    // no semi-colons
    semi: ['error', 'never'],
    // No variable shadowing
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    
    // console stdout options
    'no-console': [
      'error',
      {
        allow: [/*'log'*/,'warn', 'error', 'info', 'group', 'groupEnd'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    // prettier eslint plugin to enable prettier code formatting
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        endOfLine: 'lf',
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: false,
        arrowParens: 'avoid',
        trailingComma: 'all',
      },
    ],
  },
}
