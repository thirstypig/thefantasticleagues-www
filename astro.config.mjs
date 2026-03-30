import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.thefantasticleagues.com',
  integrations: [tailwind()],
  output: 'static',
});
