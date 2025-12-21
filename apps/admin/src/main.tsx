import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AdminLayout } from './shared/AdminLayout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { NotFound } from './pages/NotFound';
import { ErrorBoundary } from './shared/ErrorBoundary';
import { RequireAuth } from './shared/RequireAuth';

const queryClient = new QueryClient();


const rootRoute = createRootRoute({
  component: () => (
    <RequireAuth>
      <AdminLayout />
    </RequireAuth>
  ),
  errorComponent: ErrorBoundary,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: Users,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
});

const routeTree = rootRoute.addChildren([dashboardRoute, usersRoute, notFoundRoute]);
const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
