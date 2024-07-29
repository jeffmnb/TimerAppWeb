module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error", { semi: false }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "sort-keys": "off",
    "sort-keys-fix/sort-keys-fix": "off",
    "no-alert": "off",
    complexity: ["warn", 15],
    "no-shadow": "warn",
    "no-prototype-builtins": "off",
    "no-empty-pattern": "off",
    "jsx-a11y/no-autofocus": "off",
    "no-await-in-loop": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "eslint-comments/disable-enable-pair": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/ban-types": "off",
    "eslint-comments/no-unused-disable": "error",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
  ignorePatterns: ["webpack/*"],
}
