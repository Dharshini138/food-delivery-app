import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Allows you to use @/components etc.
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
