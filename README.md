# Modern Monorepo Template

A modern, accessibility-first monorepo for React 19, Node.js, and TypeScript 5, powered by pnpm, Turborepo, and Lerna. Strict on accessibility, performance, and code quality.

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

### Other templates

- There is a react version available here [modern-react-template](https://github.com/asudbury/modern-react-template)
- There is a react lite version available here [modern-react-template-lite](https://github.com/asudbury/modern-react-template-lite)

## Features

### Core Features (Always Enabled)

- ♿ Accessibility-first (WCAG 2.2 AA compliant)
- 🦾 [Axe-core](https://github.com/dequelabs/axe-core) automated accessibility checks
- 📝 [Commitlint](https://commitlint.js.org/#/) enforcing conventional commit messages
- 🛡️ Global Error Boundary with custom fallback UI and reload/reset support
- 🔐 [Gitleaks](https://github.com/gitleaks/gitleaks) secret scanning in pre-commit and CI
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

## 📝 Commit Message Help

This project enforces [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). If your commit is rejected, see:

👉 Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

A modern, accessibility-first monorepo for React 19, Node.js, and TypeScript 5, powered by pnpm, Turborepo, and Lerna. Strict on accessibility, performance, and code quality.

---

## Project Structure

```
modern-monorepo-template/
├── apps/
│   ├── web/               # Public React app (Vite, React 19)
│   ├── admin/             # Admin React app (Vite, React 19)
│   └── api/               # Node.js API (Express, TypeScript)
├── packages/
│   ├── ui/                # Shared React component library
│   ├── config/            # Shared ESLint, Prettier, and TS configs
│   └── utils/             # Shared utilities
├── .github/               # GitHub workflows, Copilot instructions
├── docs/                  # Generated markdown docs (TypeDoc)
├── docs-html/             # Generated HTML docs (TypeDoc)
├── playwright/            # E2E tests (Playwright)
├── .env.example           # Environment variables template
├── .gitleaks.toml         # Secret scanning config (Gitleaks)
├── .gitleaksignore        # Secret scanning ignore file (Gitleaks)
├── .gitignore             # Git ignore rules
├── .gitleaks.toml         # Secret scanning config (Gitleaks)
├── .gitleaksignore        # Secret scanning ignore rules
├── .prettierrc            # Prettier configuration
├── commitlint.config.js   # Commit message lint rules
├── eslint.config.js       # ESLint configuration
├── knip.config.js         # Knip unused code analysis config
├── lerna.json             # Lerna monorepo configuration
├── package.json           # Dependencies and scripts
├── pnpm-workspace.yaml    # pnpm workspace configuration
├── turbo.json             # Turborepo pipeline configuration
├── tsconfig.json          # TypeScript configuration
├── typedoc.json           # TypeDoc markdown config
├── typedoc.html.json      # TypeDoc HTML config
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
└── README.md              # Project documentation
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20 or higher ([Download](https://nodejs.org/))
- **pnpm**: Version 10.5.2 ([Installation guide](https://pnpm.io/installation))
  ```bash
  npm install -g pnpm@10.5.2
  ```

---

## Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/asudbury/modern-monorepo-template.git
   cd modern-monorepo-template
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables (optional):**

   ```bash
   cp .env.example .env
   # Edit .env with your specific configuration
   ```

4. **Run all apps in dev mode:**

   ```bash
   pnpm run dev
   ```

   This will start:
   - Web app: http://localhost:5173
   - Admin app: http://localhost:5174
   - API: http://localhost:3000

5. **Build all apps/packages:**

   ```bash
   pnpm run build
   ```

6. **Lint all code:**

   ```bash
   pnpm run lint
   ```

7. **Run all tests:**

   ```bash
   pnpm test
   ```

8. **Analyze for unused code/deps:**
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
- `pnpm run secrets:scan` – scan entire repository for secrets
- `pnpm run secrets:scan-staged` – scan only staged files for secrets
- `pnpm run secrets:baseline` – generate a baseline report of detected secrets
- `pnpm run docs:md` – generate markdown API docs with TypeDoc (output: docs/)
- `pnpm run docs:html` – generate HTML API docs with TypeDoc (output: docs-html/)
- Conventional commits enforced via commitlint on `git commit`

### Testing

- `pnpm test` – run all tests
- `pnpm run test:unit` – run unit tests
- `pnpm run test:e2e` – run E2E tests with Playwright

---

## Security: Secret Scanning

This project uses [Gitleaks](https://github.com/gitleaks/gitleaks) to prevent secrets (API keys, passwords, tokens) from being committed to the repository.

### How It Works

Secret scanning runs in two places:

1. **Pre-commit Hook**: Automatically scans staged files before each commit
2. **CI Pipeline**: Scans the entire repository on every push and pull request

### Installation

Gitleaks needs to be installed on your local machine for the pre-commit hook to work.

#### macOS

```bash
brew install gitleaks
```

#### Linux

```bash
# Option 1: Download and install to user directory (recommended)
mkdir -p ~/.local/bin
curl -sSfL https://github.com/gitleaks/gitleaks/releases/latest/download/gitleaks_linux_x64.tar.gz | tar -xz
mv gitleaks ~/.local/bin/
# Make sure ~/.local/bin is in your PATH
export PATH="$HOME/.local/bin:$PATH"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc

# Option 2: System-wide installation (requires sudo)
curl -sSfL https://github.com/gitleaks/gitleaks/releases/latest/download/gitleaks_linux_x64.tar.gz | tar -xz
sudo mv gitleaks /usr/local/bin/
```

> **Security Note**: For enhanced security, consider verifying the download checksum from the [official releases page](https://github.com/gitleaks/gitleaks/releases) before installation.

#### Windows

Download the latest Windows release from the [Gitleaks releases page](https://github.com/gitleaks/gitleaks/releases) and add it to your PATH.

### Usage

#### Scan Entire Repository

```bash
pnpm run secrets:scan
```

#### Scan Only Staged Files

```bash
pnpm run secrets:scan-staged
```

#### Generate Baseline Report

```bash
pnpm run secrets:baseline
```

This creates a JSON report at `gitleaks-baseline.json` with all detected secrets.

### Handling False Positives

If Gitleaks detects something that isn't actually a secret:

1. **Run a scan to get the fingerprint**:

   ```bash
   gitleaks detect --report-format json --report-path gitleaks-report.json
   ```

2. **Open the report** and find the `Fingerprint` field for the false positive

3. **Add the fingerprint to `.gitleaksignore`**:

   ```
   <fingerprint>:<file>:<line>
   ```

   Example:

   ```
   a1b2c3d4e5f6g7h8:apps/web/src/config.ts:42
   ```

4. **Commit your changes** – the false positive will now be ignored

### Configuration

Secret scanning is configured via `.gitleaks.toml`:

- **Custom rules**: Add organization-specific secret patterns
- **Allowlist patterns**: Regex patterns for known false positives
- **Ignored paths**: Directories and files to skip (node_modules, dist, etc.)
- **Stop words**: Words that indicate test/example data

### Bypassing Secret Scanning (Not Recommended)

In rare cases where you need to bypass the pre-commit check:

```bash
git commit --no-verify
```

⚠️ **Warning**: This skips all pre-commit checks, including linting and testing. The CI pipeline will still catch secrets.

### Best Practices

- ✅ Use environment variables for all sensitive data
- ✅ Keep real secrets in `.env` (which is gitignored)
- ✅ Use `.env.example` with placeholder values
- ✅ Review the `.gitleaks.toml` configuration periodically
- ✅ Keep Gitleaks updated: `brew upgrade gitleaks` (macOS)
- ❌ Never commit real API keys, passwords, or tokens
- ❌ Don't use `--no-verify` to bypass checks

---

## Troubleshooting

### Build Fails

**Issue**: Build fails with "Cannot find module" errors

**Solution**: Ensure all dependencies are installed and packages are built in the correct order:

```bash
# Clean and rebuild
rm -rf node_modules apps/*/node_modules packages/*/node_modules
rm -rf apps/*/dist packages/*/dist .turbo
pnpm install
pnpm run build
```

### Commit Rejected

**Issue**: Commit is rejected by commitlint

**Solution**: This project enforces [Conventional Commits](https://www.conventionalcommits.org/). Use one of these prefixes:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance tasks
- `refactor:` for code refactoring
- `test:` for test changes
- `style:` for formatting changes

Example: `feat: add user authentication`

### Dev Server Won't Start

**Issue**: Port already in use or dev server fails to start

**Solution**:

1. Check if ports 3000, 5173, 5174 are available
2. Kill any processes using these ports:
   ```bash
   # On macOS/Linux
   lsof -ti:3000,5173,5174 | xargs kill -9
   # On Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

### TypeScript Errors in IDE

**Issue**: IDE shows TypeScript errors despite successful build

**Solution**: Restart your TypeScript server or IDE, and ensure you're using the workspace TypeScript version.

### pnpm Version Mismatch

**Issue**: CI fails or unexpected behavior with different pnpm versions

**Solution**: Ensure you're using pnpm 10.5.2:

```bash
npm install -g pnpm@10.5.2
pnpm --version
```

### Secret Scanning Failures

**Issue**: Pre-commit hook fails with "Gitleaks not installed"

**Solution**: Install Gitleaks following the instructions in the [Security: Secret Scanning](#security-secret-scanning) section.

**Issue**: False positive detected as a secret

**Solution**: Add the fingerprint to `.gitleaksignore`:

1. Run `gitleaks detect --report-format json --report-path gitleaks-report.json`
2. Find the fingerprint in the report
3. Add it to `.gitleaksignore` in the format: `<fingerprint>:<file>:<line>`

**Issue**: Pre-commit hook is too slow

**Solution**: The secret scanning only checks staged files, which should be fast. If it's still slow:

1. Ensure you're running the latest version of Gitleaks
2. Check if you have a large number of staged files
3. Consider unstaging files you don't need to commit yet

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
- [Gitleaks](https://github.com/gitleaks/gitleaks)
- [Husky](https://typicode.github.io/husky/)
- [Knip](https://knip.dev/)
- [Prettier](https://prettier.io/)

### Docs, Analysis & Hosting

- [GitHub Pages](https://docs.github.com/en/pages)
- [SonarCloud](https://sonarcloud.io/)
- [TypeDoc](https://typedoc.org/)

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development workflow
- Coding standards
- Commit guidelines
- Pull request process

---

## License

MIT
