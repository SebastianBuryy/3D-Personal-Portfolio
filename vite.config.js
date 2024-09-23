import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // Fast and efficient minification
    sourcemap: false, // Disable sourcemaps in production to reduce bundle size
    target: 'esnext', // Use modern JavaScript syntax for smaller and faster bundles
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splits dependencies into a separate chunk to improve load times
          }
        },
      },
    },
  },
});
