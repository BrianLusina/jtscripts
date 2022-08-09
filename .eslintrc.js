module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    document: true,
    navigator: true,
    window: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    strict: 0,
    'import/no-named-as-default': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['off', { props: false }],
    'prettier/prettier': 'warn',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-unused-expressions': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: 'error',
        argsIgnorePattern: '^own[p|P]rops$|^prev[s|S]tate$|^e$|^_$',
      },
    ],
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'no-restricted-globals': 'warn',
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
