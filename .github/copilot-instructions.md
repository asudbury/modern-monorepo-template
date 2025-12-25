# GitHub Copilot Instructions

This file provides context and guidelines for GitHub Copilot when working in this repository.

## Project Overview

This is a modern monorepo template built with:

- **pnpm workspaces** for package management
- **Turborepo** for build orchestration
- **Lerna** for independent versioning
- **React 19** for UI applications
- **TypeScript 5** with strict mode
- **Vite** for fast development and builds

## Repository Structure

```
modern-monorepo-template/
├── apps/
│   ├── web/      # Public React app (Vite + React 19)
│   ├── admin/    # Admin dashboard (Vite + React 19)
│   └── api/      # Node.js REST API (Express + TypeScript)
├── packages/
│   ├── ui/       # Shared React components
│   ├── utils/    # Shared utilities
│   └── config/   # Shared ESLint, Prettier, TS configs
└── .github/      # Workflows and automation
```

## Coding Standards

### TypeScript

- **Always** use TypeScript strict mode
- **Never** use `any` type - use `unknown` or proper types
- **Always** define proper interfaces and types
- Use type inference where appropriate
- Prefer `interface` over `type` for object shapes
- Use `const` assertions for immutable values

### React

- Use **functional components** with hooks (React 19)
- Avoid class components
- Use **React 19 features** where appropriate
- Follow hooks rules strictly
- Keep components small and focused (< 200 lines)
- Extract custom hooks for reusable logic
- Use proper prop types with TypeScript

### Accessibility

- **WCAG 2.2 AA compliance** is mandatory
- Always include proper ARIA attributes
- Ensure keyboard navigation works
- Use semantic HTML elements
- Include alt text for images
- Test with screen readers in mind
- Use color contrast ratios >= 4.5:1

### Error Handling

- Use Error Boundaries for React components
- Implement proper try-catch blocks
- Provide meaningful error messages
- Log errors appropriately (not to console in production)
- Handle async errors with proper error states

### Testing

- Write tests for all new features
- Use **Vitest** for unit tests
- Use **React Testing Library** for component tests
- Use **Playwright** for E2E tests
- Aim for meaningful test coverage, not just numbers
- Test accessibility in component tests
- Mock external dependencies appropriately

### Code Style

- Use **Prettier** for formatting (auto-formatted on save)
- Follow existing patterns in the codebase
- Keep functions small and single-purpose
- Use descriptive variable and function names
- Add JSDoc comments for complex functions
- Avoid deep nesting (max 3 levels)
- Use early returns to reduce nesting

### Imports

- Use path aliases where configured: `@repo/ui`, `@repo/utils`
- Group imports: React, third-party, internal, relative
- Remove unused imports
- Use named exports over default exports

### Monorepo Conventions

- **Internal packages** use `workspace:*` protocol
- Keep shared code in `packages/`
- Don't duplicate code between apps
- Ensure packages have clear, focused purposes
- Update package READMEs when adding features

## Common Patterns

### Component Pattern

```typescript
import React from 'react';

export interface ComponentProps {
  title: string;
  onAction?: () => void;
}

export const Component: React.FC<ComponentProps> = ({ title, onAction }) => {
  return (
    <div role="region" aria-label={title}>
      <h1>{title}</h1>
      {onAction && (
        <button onClick={onAction} type="button">
          Action
        </button>
      )}
    </div>
  );
};
```

### Custom Hook Pattern

```typescript
import { useState, useEffect } from 'react';

export function useCustomHook(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Effect logic
  }, [value]);

  return { value, setValue };
}
```

### Utility Function Pattern

```typescript
/**
 * Formats a value with proper description
 * @param value - The value to format
 * @returns Formatted string
 */
export function formatValue(value: number): string {
  return value.toFixed(2);
}
```

### API Endpoint Pattern

```typescript
import express from 'express';
import { z } from 'zod';

const router = express.Router();

const requestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

router.post('/endpoint', (req, res) => {
  try {
    const data = requestSchema.parse(req.body);
    // Handle request
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
});
```

## Commit Messages

Follow **Conventional Commits** format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Scopes**: ui, utils, config, web, admin, api, ci, deps

**Examples**:

- `feat(ui): add Button variant prop`
- `fix(api): resolve CORS issue`
- `docs: update README quick start`
- `chore(deps): update react to 19.1.0`

## Commands Reference

```bash
# Install dependencies
pnpm install

# Development
pnpm run dev                    # Run all apps
pnpm --filter @repo/web dev     # Run specific app

# Building
pnpm run build                  # Build all
pnpm --filter @repo/ui build    # Build specific package

# Testing
pnpm test                       # Run all tests
pnpm --filter @repo/web test    # Test specific package

# Code Quality
pnpm run lint                   # Lint all
pnpm run lint:fix               # Fix linting issues
pnpm run prettier               # Format code
pnpm run knip                   # Check unused code
```

## What to Suggest

### ✅ Do Suggest

- Type-safe solutions using TypeScript
- Accessible UI patterns
- Modern React 19 features
- Proper error handling
- Unit and integration tests
- Performance optimizations
- Security best practices
- Reusable components and utilities

### ❌ Don't Suggest

- Using `any` type
- Ignoring TypeScript errors with `@ts-ignore`
- Class components (use functional)
- Inline styles (except for dynamic styles)
- Console.log in production code
- Direct DOM manipulation in React
- Skipping accessibility attributes
- Hardcoded values (use constants/env vars)

## Dependencies

### Preferred Libraries

- **State Management**: TanStack Query (already used)
- **Routing**: TanStack Router (already used)
- **Validation**: Zod (already used)
- **Testing**: Vitest, React Testing Library, Playwright (already used)
- **HTTP**: fetch API or express (already used)

### Avoid

- Redux (use TanStack Query instead)
- Axios (use native fetch)
- Moment.js (use native Date or date-fns)
- Lodash (use native ES6+ methods)

## Security Considerations

- Never commit secrets or API keys
- Validate all user inputs
- Sanitize data before displaying
- Use environment variables for configuration
- Follow OWASP top 10 guidelines
- Use Zod for schema validation
- Implement proper CORS policies

## Performance

- Use React.memo for expensive components
- Implement code splitting with dynamic imports
- Optimize images and assets
- Use proper caching strategies
- Avoid unnecessary re-renders
- Profile with React DevTools

## Documentation

- Update READMEs when adding features
- Include usage examples in component files
- Document complex logic with comments
- Keep CONTRIBUTING.md up to date
- Add JSDoc for public APIs

## Questions to Ask Before Suggesting

1. Does this follow TypeScript strict mode?
2. Is this accessible (WCAG 2.2 AA)?
3. Are there proper tests?
4. Does this follow existing patterns?
5. Is error handling implemented?
6. Are types properly defined?
7. Is this the simplest solution?

## Additional Context

- The project emphasizes **accessibility-first** design
- All code must pass **ESLint** and **TypeScript** checks
- Tests are run automatically in CI
- Commits must follow **Conventional Commits**
- The monorepo uses **pnpm workspaces** and **Turborepo**

## Helpful Reminders

When writing code for this repository:

- Start with TypeScript interfaces
- Add accessibility attributes
- Write the test first (TDD when possible)
- Keep components pure and testable
- Use semantic HTML
- Follow the DRY principle
- Prefer composition over inheritance
