import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: resolve(__dirname, './public/assets'),
      },
      {
        find: '@type',
        replacement: resolve(__dirname, './src/@types'),
      },
      {
        find: '@apis',
        replacement: resolve(__dirname, './src/apis'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@config',
        replacement: resolve(__dirname, './src/config'),
      },
      {
        find: '@constants',
        replacement: resolve(__dirname, './src/constants'),
      },
      {
        find: '@contexts',
        replacement: resolve(__dirname, './src/contexts'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, './src/hooks'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@styles',
        replacement: resolve(__dirname, './src/styles'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, './src/utils'),
      },
    ],
  },
});
