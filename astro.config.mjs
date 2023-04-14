import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://picklenik.github.io",
  base: "/areebsnotes",
  integrations: [tailwind()],
});
