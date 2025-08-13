/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

/**
 * Astro React config dependencies
 * - @astrojs/preact
 * - @astrojs/mdx
 * - vite-plugin-svgr
 * - preact
 */
export default defineConfig({
  integrations: [import.meta.env.MODE === 'production' ? preact({ compat: true }) : react(), mdx()],
  vite: {
    plugins: [svgr()],
  },
});
