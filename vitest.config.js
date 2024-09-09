import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'lcov']
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/')
    },
  }
});