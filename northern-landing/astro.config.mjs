import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://northern-landing.org',
  title: 'Northern Landing',
  description: 'Spreading awareness of the diverse stories of immigrants.',
  integrations: [
    react(),
    tailwind(),
  ],
});