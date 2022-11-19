module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 120,
      },
    ],
    semi: 'off',
    'react-native/no-inline-styles': 'off',
    'no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-bitwise': 0,
  },
  globals: {
    AbortController: true,
    Response: true,
    RequestInit: true,
  },
};
