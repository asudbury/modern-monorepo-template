import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
    },
    exclude: ['node_modules', 'e2e/**'],
  },
});
