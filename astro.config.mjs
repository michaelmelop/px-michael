import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://your-site.com',
  integrations: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/global.css";`
        }
      }
    }
  }
});