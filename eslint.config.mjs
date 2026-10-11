import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import codingStandards from "@stryder-works/coding-standards/eslint";
import typeChecked from "@stryder-works/coding-standards/eslint/type-checked";
import react from "@stryder-works/coding-standards/eslint/react";

export default defineConfig(
  ...codingStandards,
  {
    name: "stryder-works/strict-typescript",
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: [
      ...typeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        { assertionStyle: "never" },
      ],
      "@typescript-eslint/no-unused-vars": ["error", {}],
    },
  },
  {
    name: "stryder-works/react",
    files: ["**/*.{jsx,tsx}"],
    extends: [...react],
  },
  {
    name: "stryder-works/extensionless-imports",
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "\\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)(?:[?#].*)?$",
              message: "Omit the JavaScript or TypeScript file extension from the import path.",
            },
          ],
        },
      ],
    },
  },
);
