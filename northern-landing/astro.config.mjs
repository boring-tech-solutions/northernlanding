import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://northern-landing.org',
  title: 'Northern Landing',
  description: 'A comprehensive blog and resource hub for newcomers to Canada, featuring immigration stories, settlement guides, and community support.',
  integrations: [
    tailwind(),
  ],
});