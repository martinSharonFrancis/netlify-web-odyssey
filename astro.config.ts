import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://feature-tour.netlify.app", // Required for sitemap to work
  integrations: [react(), sitemap(), tailwind()],
});
