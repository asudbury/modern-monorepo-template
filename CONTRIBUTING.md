# Contributing to Modern Monorepo Template

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Project Structure](#project-structure)

## Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. Please be respectful and professional in all interactions.

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10.5.2
- Git
- Gitleaks (for secret scanning)

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/modern-monorepo-template.git
   cd modern-monorepo-template
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Install Gitleaks for secret scanning:
   ```bash
   # macOS
   brew install gitleaks
   
   # Linux (user-local installation - recommended)
   mkdir -p ~/.local/bin
   curl -sSfL https://github.com/gitleaks/gitleaks/releases/latest/download/gitleaks_linux_x64.tar.gz | tar -xz
   mv gitleaks ~/.local/bin/
   export PATH="$HOME/.local/bin:$PATH"
   
   # Windows - download from https://github.com/gitleaks/gitleaks/releases
   ```
5. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Project

```bash
# Run all apps in development mode
pnpm run dev

# Run a specific app
pnpm --filter @repo/web dev
pnpm --filter @repo/admin dev
pnpm --filter @repo/api dev

# Build all packages and apps
pnpm run build

# Build a specific package
pnpm --filter @repo/ui build
```

### Making Changes

1. Make your changes in a feature branch
2. Write or update tests for your changes
3. Ensure all tests pass: `pnpm test`
4. Lint your code: `pnpm run lint`
5. Run secret scanning: `pnpm run secrets:scan-staged`
6. Run the build to verify: `pnpm run build`

### Working with Packages

This is a monorepo with multiple packages and apps:

- **apps/web**: Public React application
- **apps/admin**: Admin React application
- **apps/api**: Node.js API server
- **packages/ui**: Shared UI components
- **packages/utils**: Shared utilities
- **packages/config**: Shared configuration

When making changes to shared packages (`ui`, `utils`, `config`), remember that they affect multiple apps.

## Coding Standards

### TypeScript

- Use TypeScript strict mode
- Define proper types for all functions and variables
- Avoid using `any` type
- Use meaningful variable and function names

### React

- Use functional components with hooks
- Follow React 19 best practices
- Ensure components are accessible (WCAG 2.2 AA compliant)
- Write components that are reusable and composable

### Styling

- Follow the existing code style
- Code is automatically formatted with Prettier on commit
- Run `pnpm run prettier` to format manually

### Linting

- ESLint is configured for the project
- Fix linting errors before committing: `pnpm run lint:fix`
- All code must pass linting checks

### Security

- **Never commit secrets** (API keys, passwords, tokens)
- Use environment variables for sensitive data
- Secret scanning runs automatically on pre-commit and in CI
- If you need to bypass secret scanning for a legitimate reason:
  1. Generate a fingerprint: `gitleaks detect --report-format json --report-path gitleaks-report.json`
  2. Add the fingerprint to `.gitleaksignore`
  3. Document why it's a false positive in a comment

## Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) enforced by commitlint.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semi-colons, etc.)
- **refactor**: Code refactoring (no functional changes)
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates
- **ci**: CI/CD configuration changes

### Examples

```bash
feat(ui): add new Button variant for primary actions
fix(api): resolve CORS issue in authentication endpoint
docs: update README with new environment variables
chore(deps): update react to version 19.1.0
```

### Scope

Scope should indicate which part of the codebase is affected:

- `ui`, `utils`, `config` for packages
- `web`, `admin`, `api` for apps
- `ci`, `deps`, `build` for infrastructure

## Pull Request Process

### Before Submitting

1. Update relevant documentation
2. Add or update tests for your changes
3. Ensure all tests pass: `pnpm test`
4. Ensure the build succeeds: `pnpm run build`
5. Run linting: `pnpm run lint`
6. Run secret scanning: `pnpm run secrets:scan-staged`
7. Check for unused code: `pnpm run knip`

### Submitting a Pull Request

1. Push your branch to your fork
2. Open a pull request against the `master` branch
3. Fill out the pull request template completely
4. Link any related issues
5. Wait for CI checks to pass
6. Address review feedback

### Pull Request Title

Follow the same format as commit messages:

```
feat(ui): add new Button component
```

### Pull Request Description

Include:

- **What**: What changes are being made
- **Why**: Why these changes are necessary
- **How**: How the changes work
- **Testing**: How the changes were tested
- **Screenshots**: For UI changes, include before/after screenshots

## Testing

### Unit Tests

```bash
# Run all unit tests
pnpm test

# Run tests for a specific package
pnpm --filter @repo/ui test

# Run tests in watch mode
pnpm --filter @repo/web test -- --watch
```

### E2E Tests

```bash
# Run E2E tests
pnpm run test:e2e

# Run E2E tests in UI mode
pnpm --filter @repo/web exec playwright test --ui
```

### Writing Tests

- Write tests for all new features
- Update tests when changing existing functionality
- Use React Testing Library for component tests
- Use Vitest for unit tests
- Use Playwright for E2E tests
- Aim for good test coverage, but prioritize testing critical paths

## Project Structure

```
modern-monorepo-template/
├── apps/
│   ├── web/              # Public React app
│   ├── admin/            # Admin React app
│   └── api/              # Node.js API
├── packages/
│   ├── ui/               # Shared UI components
│   ├── utils/            # Shared utilities
│   └── config/           # Shared configs (ESLint, Prettier, TS)
├── .github/              # GitHub Actions workflows
├── .husky/               # Git hooks
├── .env.example          # Environment variables template
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # pnpm workspace configuration
└── lerna.json            # Lerna configuration
```

### Adding New Packages

1. Create a new directory under `packages/` or `apps/`
2. Add a `package.json` with:
   - A scoped name: `@repo/package-name`
   - `"private": true` for apps
   - Workspace dependencies: `"@repo/ui": "workspace:*"`
3. Add the package to `pnpm-workspace.yaml` if needed (usually not required due to wildcards)
4. Run `pnpm install` to link workspace dependencies

### Dependencies

- Use `pnpm add <package>` to add dependencies
- Use `pnpm add -D <package>` for dev dependencies
- Use workspace protocol for internal packages: `"@repo/ui": "workspace:*"`
- Keep dependencies up to date and security-focused

## Questions?

If you have questions or need help:

- Check existing [Issues](https://github.com/asudbury/modern-monorepo-template/issues)
- Open a new issue with your question
- Review the [DeepWiki documentation](https://deepwiki.com/asudbury/modern-monorepo-template)

Thank you for contributing! 🎉
