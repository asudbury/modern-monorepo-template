# Modern Monorepo Template

A production-ready TypeScript monorepo using Lerna, Turborepo, Turbopack, and npm.

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


## Monorepo Features

- 📝 [**Commitlint**](https://commitlint.js.org/#/) enforcing conventional commit messages
- 🔒 [**ESLint**](https://eslint.org/) static analysis (shared config)
- 🪝 [**Husky**](https://typicode.github.io/husky/) pre-commit + commit-msg hooks
- 📦 [**Lerna**](https://lerna.js.org/) for independent versioning
- 💅 [**Prettier**](https://prettier.io/) code formatting (shared config)
- 🎭 [**Playwright**](https://playwright.dev/) for E2E browser testing
- 🛣️ Path aliases across packages
- 🧩 Shared UI and utils packages
- 🟦 [**TypeScript**](https://www.typescriptlang.org/docs/) everywhere (strict mode)
- ⚡ [**Turborepo**](https://turbo.build/) + [**Turbopack**](https://turbo.build/pack/docs) for fast builds
- 🧪 [**Vitest**](https://vitest.dev/) for unit tests

## App Features (web/admin)

- 🛡️ Global Error Boundary with custom fallback UI and reload/reset support
- ✨ [**React 19**](https://react.dev/) with the latest features
- 🧪 [**Vitest**](https://vitest.dev/) + [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/) unit testing and accessible queries
- 🔄 [**TanStack Query**](https://tanstack.com/query/latest) for server state management
- 🧭 [**TanStack Router**](https://tanstack.com/router) for type-safe routing
- 🧑‍⚖️ [**Zod**](https://zod.dev/) for data validation


## Monorepo Structure

```
/
├─ apps/
│  ├─ web/      # Public React app
│  ├─ admin/    # Admin React app
│  └─ api/      # Node.js API
│
├─ packages/
│  ├─ ui/       # Shared React component library
│  ├─ config/   # Shared eslint, tsconfig, prettier configs
│  └─ utils/    # Shared utilities
│
├─ package.json
├─ lerna.json
├─ turbo.json
└─ README.md
```

## Getting Started

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

## Apps

- **web**: React 19 + Vite + Turbopack, public site, uses shared UI and utils, example Home/About pages, accessibility checks.
- **admin**: React 19 + Vite + Turbopack, admin dashboard, protected routes, shared UI, example pages.
- **api**: Node.js + TypeScript, Express, example REST endpoints, uses shared utils, hot reload in dev.

## Shared Packages

- **ui**: Reusable React components (Button, Layout, Form controls)
- **utils**: Shared helpers and constants
- **config**: Shared ESLint, Prettier, and TypeScript configs

## Tooling

- **Linting/Formatting:** ESLint, Prettier (shared config)
- **Testing:** Vitest, React Testing Library, Playwright (E2E)
- **Accessibility:** Axe-core
- **Git Hooks:** Husky, Commitlint

## Scripts

- `pnpm run dev` – run all apps in parallel
- `pnpm run build` – build all apps/packages
- `pnpm run lint` – lint all code
- `pnpm test` – run all tests

---

Minimal, modern, and production-ready. Start building!
