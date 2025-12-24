import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
    },
    exclude: ['node_modules'],
  },
});
