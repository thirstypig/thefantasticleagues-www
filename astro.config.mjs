import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// When using a custom domain (www.thefantasticleagues.com), base should be '/'.
// While on GitHub Pages without custom domain, use '/thefantasticleagues-www/'.
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

export default defineConfig({
  site: isCustomDomain
    ? 'https://www.thefantasticleagues.com'
    : 'https://thirstypig.github.io',
  base: isCustomDomain ? '/' : '/thefantasticleagues-www/',
  integrations: [tailwind()],
  output: 'static',
});
