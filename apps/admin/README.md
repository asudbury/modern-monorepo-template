# Admin App

An admin dashboard application built with React 19, featuring protected routes, authentication, and comprehensive user management capabilities.

## Features

- ⚛️ **React 19** with modern patterns
- ⚡ **Vite** for fast development
- 🟦 **TypeScript** with strict mode
- 🔐 **Protected Routes** with authentication checks
- 🔄 **TanStack Router** for type-safe routing
- 🔄 **TanStack Query** for data fetching
- 🧪 **Vitest** for testing
- ♿ **Accessibility-first** design
- 🎨 Uses shared **@repo/ui** components
- 🛡️ **Error Boundary** for graceful error handling

## Development

```bash
# Run in development mode
pnpm --filter @repo/admin dev

# Build for production
pnpm --filter @repo/admin build

# Preview production build
pnpm --filter @repo/admin preview

# Run tests
pnpm --filter @repo/admin test
```

## Project Structure

```
src/
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Users.tsx       # User management
│   └── NotFound.tsx    # 404 page
├── shared/             # Shared components
│   ├── AdminLayout.tsx # Layout wrapper
│   ├── ErrorBoundary.tsx
│   └── RequireAuth.tsx # Route protection
└── main.tsx            # Application entry point
```

## Protected Routes

The app uses `RequireAuth` component to protect routes that require authentication. Example:

```tsx
<Route path="/dashboard" component={RequireAuth}>
  <Dashboard />
</Route>
```

## Environment Variables

Create a `.env` file:

```env
VITE_ADMIN_API_URL=http://localhost:3000
```

## Technologies

- React 19.1.0
- Vite 5.x
- TypeScript 5.9.x
- TanStack Router
- TanStack Query
- Zod for validation

