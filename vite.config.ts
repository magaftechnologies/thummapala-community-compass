import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    viteTsConfigPaths(),
    tanstackStart({ server: { entry: "server" } }),
    viteReact(),
    ...(process.env.npm_lifecycle_event === "build" ? [nitro({ preset: "vercel" })] : []),
  ],
});
