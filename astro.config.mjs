// @ts-check
import { defineConfig } from 'astro/config';

<<<<<<< HEAD
// https://astro.build/config
export default defineConfig({});
=======
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false
  },

  integrations: [mdx()]
});
>>>>>>> 047afdd (update)
