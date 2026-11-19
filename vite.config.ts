// The shared TanStack Start config provides the project's Vite plugins and build defaults.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Use the server entry that wraps SSR errors.
    server: { entry: "server" },
  },
});
