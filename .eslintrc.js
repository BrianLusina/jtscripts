module.exports = {
  root: true,
  env: {
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  // plugins: [''],
  rules: {
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        varsIgnorePattern: "error",
      },
    ],
    // indent: ['error', 'tab'],
    "linebreak-style": ["error", "unix"],
    //    "quotes": [
    //      "error",
    //      "double",
    //      "single"
    //    ],
    // "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/indent": ["error", 2, { SwitchCase: 1 }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "capitalized-comments": "off",
    "comma-dangle": ["error", "always-multiline"],
    "no-warning-comments": "off",
    complexity: "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
  },
};
