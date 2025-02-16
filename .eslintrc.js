module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  overrides: [
    {
      files: ['*.html'],
      rules: {
        'prettier/prettier': ['error', { parser: 'html' }],
      },
    },
  ],
  ignorePatterns: ['*.html'],
};