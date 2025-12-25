# Utils Package

A shared utilities library providing common helper functions and constants used across the monorepo.

## Features

- 🟦 **TypeScript** with strict typing
- 🧪 **Vitest** for testing
- 📦 Used by all apps (web, admin, api)
- 🔧 Pure utility functions with no side effects

## Utilities

### String Utilities
Helper functions for string manipulation.

### Math Utilities
Common mathematical operations and calculations.

## Development

```bash
# Build the package
pnpm --filter @repo/utils build

# Run tests
pnpm --filter @repo/utils test

# Run tests in watch mode
pnpm --filter @repo/utils test -- --watch
```

## Usage

Import utilities in your app:

```typescript
import { capitalize, sum } from '@repo/utils';

const name = capitalize('john'); // 'John'
const total = sum(5, 10);        // 15
```

## Available Utilities

### String Functions
- `capitalize(str: string): string` - Capitalize the first letter of a string

### Math Functions
- `sum(a: number, b: number): number` - Add two numbers together

## Adding New Utilities

1. Create or edit a utility file in `src/`:
```typescript
// src/array.ts
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export function chunk<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
}
```

2. Export from `src/index.ts`:
```typescript
export { unique, chunk } from './array';
```

3. Add tests in `src/array.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';
import { unique, chunk } from './array';

describe('array utilities', () => {
  it('removes duplicates', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('chunks array', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});
```

4. Rebuild the package:
```bash
pnpm --filter @repo/utils build
```

## Best Practices

- **Pure Functions**: All utilities should be pure functions (no side effects)
- **Type Safety**: Use TypeScript for proper typing
- **Testing**: Write tests for all utilities
- **Documentation**: Add JSDoc comments for complex functions
- **Small & Focused**: Keep utilities small and single-purpose

## Example

```typescript
/**
 * Formats a date to ISO 8601 format
 * @param date - The date to format
 * @returns ISO 8601 formatted string
 */
export function formatDate(date: Date): string {
  return date.toISOString();
}
```

## Technologies

- TypeScript 5.9.x
- Vitest for testing

