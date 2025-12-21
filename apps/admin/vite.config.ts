import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  publicDir: 'public',
  resolve: {
    alias: {
      '@repo/ui': '../../packages/ui',
      '@repo/utils': '../../packages/utils/src',
    },
  },
});
