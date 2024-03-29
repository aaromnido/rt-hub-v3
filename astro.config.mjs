import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  renderers: ['@astrojs/react'],
  integrations: [vue()],
  output: "server",
});