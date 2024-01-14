import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'it', 'pl', 'pt']
  },
  routing: {
    prefixDefaultLocale: false
  },
  output: 'server',
  adapter: vercel(),

});