import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.mp4'],
  server: {
    port: 5173,
    open: false,
    host: true,
    watch: {
      ignored: ['**/dist/**', '**/.git/**']
    }
  }
});
