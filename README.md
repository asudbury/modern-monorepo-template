# Modern Monorepo Template

---

## 📝 Commit Message Help

This project enforces [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). If your commit is rejected, see:

👉 Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

A modern, accessibility-first monorepo for React 19, Node.js, and TypeScript 5, powered by pnpm, Turborepo, and Lerna. Strict on accessibility, performance, and code quality.

---

## 📚 DeepWiki Project Knowledge Base

> **Explore the full documentation, architecture, and deep technical notes for this project on DeepWiki:**
>
> [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/asudbury/modern-monorepo-template)
>
> - Comprehensive guides, diagrams, and design decisions
> - Contributor onboarding and advanced usage tips
> - Maintainer notes, troubleshooting, and best practices
>
> **This is the canonical knowledge base for the project. If you're contributing, maintaining, or deploying, start here!**

---

## Features

### Core Features (Always Enabled)

- ♿ Accessibility-first (WCAG 2.2 AA compliant)
- 🦾 [Axe-core](https://github.com/dequelabs/axe-core) automated accessibility checks
- 📝 [Commitlint](https://commitlint.js.org/#/) enforcing conventional commit messages
- 🛡️ Global Error Boundary with custom fallback UI and reload/reset support
- 🔒 [ESLint](https://eslint.org/) static analysis (shared config)
- 🪝 [Husky](https://typicode.github.io/husky/) pre-commit + commit-msg hooks
- 🧹 [Knip](https://knip.dev/) unused code & dependency analysis (non-blocking, see CI)
- 📦 [Lerna](https://lerna.js.org/) for independent versioning
- 💅 [Prettier](https://prettier.io/) code formatting (shared config)
- 🎭 [Playwright](https://playwright.dev/) for E2E browser testing
- 🛣️ Path aliases across packages
- 🧩 Shared UI and utils packages
- 🟦 [TypeScript 5](https://www.typescriptlang.org/docs/) everywhere (strict mode)
- ⚡ [Turborepo](https://turbo.build/) + [Turbopack](https://turbo.build/pack/docs) for fast builds
- 🧪 [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests
- ✨ [React 19](https://react.dev/) with the latest features
- 🔄 [TanStack Query](https://tanstack.com/query/latest) for server state management
- 🧭 [TanStack Router](https://tanstack.com/router) for type-safe routing
- 🧑‍⚖️ [Zod](https://zod.dev/) for data validation
- 🚫 404 Not Found Page accessible, customizable fallback for unmatched routes

### Optional Core Features (Disabled by Default)

- 🌐 [GitHub Pages](https://docs.github.com/en/pages) deployment for app and docs
- 🔍 [SonarCloud](https://sonarcloud.io/) for continuous code quality analysis
- 📖 [TypeDoc](https://typedoc.org/) for automated API documentation

---

## Project Structure

```
modern-monorepo-template/
├── apps/
│   ├── web/      # Public React app (Vite, React 19)
│   ├── admin/    # Admin React app (Vite, React 19)
│   └── api/      # Node.js API (Express, TypeScript)
├── packages/
│   ├── ui/       # Shared React component library
│   ├── config/   # Shared ESLint, Prettier, and TS configs
│   └── utils/    # Shared utilities
├── .github/      # GitHub workflows, Copilot instructions
├── docs/         # Generated markdown docs (TypeDoc)
├── docs-html/    # Generated HTML docs (TypeDoc)
├── playwright/   # E2E tests (Playwright)
├── .env.example  # Environment variables template
├── .gitignore
├── .prettierrc
├── commitlint.config.js
├── eslint.config.js
├── knip.config.js
├── lerna.json
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

---

## Quick Start

1. **Install dependencies:**
   ```bash
   pnpm install
   ```
2. **Run all apps in dev mode:**
   ```bash
   pnpm run dev
   ```
3. **Build all apps/packages:**
   ```bash
   pnpm run build
   ```
4. **Lint all code:**
   ```bash
   pnpm run lint
   ```
5. **Run all tests:**
   ```bash
   pnpm test
   ```
6. **Analyze for unused code/deps:**
   ```bash
   pnpm run knip
   ```

---

## Apps

- **web**: React 19 + Vite + Turbopack, public site, uses shared UI and utils, example Home/About pages, accessibility checks.
- **admin**: React 19 + Vite + Turbopack, admin dashboard, protected routes, shared UI, example pages.
- **api**: Node.js + TypeScript, Express, example REST endpoints, uses shared utils, hot reload in dev.

## Shared Packages

- **ui**: Reusable React components (Button, Layout, Form controls)
- **utils**: Shared helpers and constants
- **config**: Shared ESLint, Prettier, and TypeScript configs

---

## Tooling & Scripts

### Development

- `pnpm run dev` – run all apps in parallel
- `pnpm run build` – build all apps/packages
- `pnpm run preview` – preview production build

### Code Quality

- `pnpm run lint` – run ESLint
- `pnpm run lint:fix` – fix ESLint issues
- `pnpm run prettier` – format code with Prettier
- `pnpm run knip` – analyze for unused files, exports, and dependencies
- Conventional commits enforced via commitlint on `git commit`

### Testing

- `pnpm test` – run all tests
- `pnpm run test:unit` – run unit tests
- `pnpm run test:e2e` – run E2E tests with Playwright

---

## Resources

### Core Framework & Styling

- [React 19 Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/)

### Data, Validation & Accessibility

- [Accessibility (WCAG 2.2 AA)](https://www.w3.org/WAI/WCAG22/quickref/)
- [Axe-core](https://www.deque.com/axe/devtools/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zod](https://zod.dev/)

### Testing

- [Playwright Documentation](https://playwright.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest Documentation](https://vitest.dev/)

### Linting, Formatting & Git Hooks

- [Commitlint](https://commitlint.js.org/#/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)
- [Knip](https://knip.dev/)
- [Prettier](https://prettier.io/)

### Docs, Analysis & Hosting

- [GitHub Pages](https://docs.github.com/en/pages)
- [SonarCloud](https://sonarcloud.io/)
- [TypeDoc](https://typedoc.org/)

---

## License

MIT
