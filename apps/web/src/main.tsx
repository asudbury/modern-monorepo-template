import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { ErrorBoundaryComponent } from './shared/ErrorBoundary';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Home,
  errorComponent: ErrorBoundaryComponent,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
});

const routeTree = rootRoute.addChildren([aboutRoute, notFoundRoute]);
const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
