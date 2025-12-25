# UI Package

A shared React component library providing reusable, accessible UI components for the monorepo applications.

## Features

- ⚛️ **React 19** components
- 🟦 **TypeScript** with strict typing
- ♿ **Accessibility-first** design (WCAG 2.2 AA)
- 🧪 **Vitest** and **React Testing Library** for testing
- 📦 Consumed by both web and admin apps

## Components

### Button

A simple, accessible button component that extends standard HTML button attributes.

**Props:**

- All standard HTML button attributes (`onClick`, `disabled`, `type`, etc.)
- `children`: React.ReactNode - Button content

**Example:**

```typescript
<Button onClick={handleClick} disabled={isLoading}>
  Submit
</Button>
```

### Layout

Layout components for consistent page structure.

### Form

Form components including inputs, checkboxes, and more.

## Development

```bash
# Build the package
pnpm --filter @repo/ui build

# Run tests
pnpm --filter @repo/ui test

# Run tests in watch mode
pnpm --filter @repo/ui test -- --watch
```

## Usage

Import components in your app:

```typescript
import { Button, Layout } from '@repo/ui';

function MyComponent() {
  return (
    <Layout>
      <Button onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
    </Layout>
  );
}
```

## Adding New Components

1. Create a new component file in `src/`:

```typescript
// src/Card.tsx
import React from 'react';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

2. Export it from `src/index.ts`:

```typescript
export { Card } from './Card';
export type { CardProps } from './Card';
```

3. Add tests in `src/Card.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders title and children', () => {
    render(<Card title="Test">Content</Card>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
```

4. Rebuild the package:

```bash
pnpm --filter @repo/ui build
```

## Testing

All components should:

- Have unit tests
- Be accessible (test with screen readers)
- Support keyboard navigation
- Have proper ARIA attributes

## Technologies

- React 19.1.0
- TypeScript 5.9.x
- Vitest
- React Testing Library
