import { stylistic } from "@stylistic/eslint-plugin";
const stylisticConfigs = stylistic.configs["recommended-extends"];

export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/jsx-a11y-recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "@stylistic", "react", "prettier"],
  rules: {
    ...stylisticConfigs.rules,
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/semi": ["error"],
    "@stylistic/strict-boolean-expressions": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["dist", "node_modules"],
};
