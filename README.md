# .github

Organization-wide community health defaults for Stryder-Works.

See [LABELS.md](LABELS.md) for the team issue labels.

## ESLint reference config

[eslint.config.ts](eslint.config.ts) combines the strictest recommended
TypeScript presets with the shared organization rules:

- `typescript-eslint` `strictTypeChecked`
- `typescript-eslint` `stylisticTypeChecked`
- `@stryder-works/coding-standards/eslint`
- `@stryder-works/coding-standards/eslint/type-checked`
- `@stryder-works/coding-standards/eslint/react` for JSX and TSX files

The config preserves the organization ban on type assertions except
`as const`. It also removes the shared unused-name exceptions for
`_` prefixes.

Static imports and re-exports must omit JavaScript and TypeScript file
extensions. This includes type imports and side-effect imports.
CSS, JSON, and image imports can keep their extensions.

```ts
import { load } from "./load";
import type { Result } from "./types";
import "./styles.css";
```

The rule rejects `.js`, `.jsx`, `.mjs`, `.cjs`, `.ts`, `.tsx`,
`.mts`, and `.cts` suffixes, including suffixes before query strings
or fragments. Dynamic `import()` and CommonJS `require()` are outside
this rule.

Use a module resolver that supports extensionless paths, such as a bundler.
Native Node.js ESM requires explicit file extensions for relative imports.

### Use in an app

Copy `eslint.config.ts` to the app root. Install the dependencies:

```sh
pnpm add -D @stryder-works/coding-standards eslint @eslint/js typescript typescript-eslint @vitest/eslint-plugin eslint-plugin-react-hooks eslint-plugin-jsx-a11y jiti
```

Use ESLint 9.22 or later for `defineConfig` support. Use Node.js 22.16 or
later for `import.meta.dirname` support. Use `jiti` 2.2 or later to load
the TypeScript config in Node.js.

Include each TypeScript source file in an app `tsconfig.json`.
The config uses the TypeScript project service for type-aware rules.

Add app globals, generated-file ignores, and boundary policies to the app
config. For an app without React, remove the React import and config block.
Then omit the two React plugin dependencies.

Run the checks:

```sh
pnpm exec eslint . --max-warnings 0
pnpm exec tsc --noEmit
pnpm test
```

Use ESLint through `lint-staged` for staged files. Run
`pnpm exec lint-drift` periodically for the full shared CLI checks.

This repository stores the reference config. GitHub does not apply it
automatically to other repositories. Each app must adopt it.

The `strictTypeChecked` rules can change in minor dependency updates.
Commit the app lockfile and review updates.

See the [typescript-eslint preset documentation](https://typescript-eslint.io/users/configs/).
