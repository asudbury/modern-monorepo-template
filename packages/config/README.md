# Config Package

Shared configuration files for ESLint, Prettier, and TypeScript used across the monorepo.

## Features

- 🔒 **ESLint** configuration with React and TypeScript rules
- 💅 **Prettier** configuration for consistent formatting
- 🟦 **TypeScript** base configuration
- 📦 Shared across all packages and apps

## Files

### eslint.config.js

ESLint configuration with:

- TypeScript support
- React rules
- Accessibility rules
- Consistent code quality standards

### prettier.config.js

Prettier configuration with:

- Consistent formatting rules
- Single quotes
- 2-space indentation
- Trailing commas

### tsconfig.base.json

Base TypeScript configuration with:

- Strict mode enabled
- Modern ES target
- Path aliases support
- React JSX support

## Usage

### ESLint

In your package's root, create `.eslintrc.js`:

```javascript
module.exports = require('@repo/config/eslint.config');
```

Or extend it with custom rules:

```javascript
const baseConfig = require('@repo/config/eslint.config');

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    // Your custom rules
  },
};
```

### Prettier

In your package's root, create `.prettierrc.js`:

```javascript
module.exports = require('@repo/config/prettier.config');
```

### TypeScript

In your package's `tsconfig.json`:

```json
{
  "extends": "@repo/config/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Modifying Shared Configuration

To change configuration for all packages:

1. Edit the relevant file in this package
2. Rebuild packages that depend on the config:

```bash
pnpm run build
```

## Configuration Details

### ESLint Rules

- Enforces TypeScript best practices
- React hooks rules
- Accessibility checks (eslint-plugin-jsx-a11y)
- No console.log in production
- Consistent naming conventions

### Prettier Rules

- Print width: 80 characters
- Tab width: 2 spaces
- Single quotes
- Semicolons required
- Trailing commas: ES5
- Arrow parentheses: always

### TypeScript Config

- Target: ES2020
- Module: ESNext
- Strict mode: enabled
- Skip lib check: true
- JSX: react-jsx (React 17+ transform)
- Module resolution: bundler

## IDE Integration

### VS Code

Install extensions:

- ESLint
- Prettier - Code formatter

Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Technologies

- ESLint 8.x
- Prettier 3.x
- TypeScript 5.9.x
