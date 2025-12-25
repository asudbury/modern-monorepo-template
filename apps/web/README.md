# Web App

A modern React 19 web application built with Vite and TypeScript, featuring accessibility-first design and comprehensive error handling.

## Features

- ⚛️ **React 19** with latest features and best practices
- ⚡ **Vite** for lightning-fast development and builds
- 🟦 **TypeScript** with strict mode enabled
- 🔄 **TanStack Router** for type-safe routing
- 🔄 **TanStack Query** for server state management
- 🧪 **Vitest** for unit testing
- 🎭 **Playwright** for end-to-end testing
- ♿ **Accessibility-first** design (WCAG 2.2 AA compliant)
- 🛡️ **Error Boundary** with graceful error handling
- 🧩 Uses shared **@repo/ui** and **@repo/utils** packages

## Development

```bash
# Run in development mode
pnpm --filter @repo/web dev

# Build for production
pnpm --filter @repo/web build

# Preview production build
pnpm --filter @repo/web preview

# Run tests
pnpm --filter @repo/web test

# Run E2E tests
pnpm --filter @repo/web test:e2e
```

## Project Structure

```
src/
├── pages/          # Page components (Home, About, NotFound)
├── shared/         # Shared components (ErrorBoundary)
├── main.tsx        # Application entry point
└── setupTests.ts   # Test setup
```

## Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/main.tsx`
3. Ensure the page is accessible and has proper error handling

## Environment Variables

Create a `.env` file in the app directory:

```env
VITE_API_URL=http://localhost:3000
```

## Technologies

- React 19.1.0
- Vite 5.x
- TypeScript 5.9.x
- TanStack Router
- TanStack Query
- Zod for validation
