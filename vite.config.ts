import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import type { Plugin } from "vite";

const publicPages = [
  "/",
  "/our-village",
  "/education",
  "/agrotech",
  "/sports",
  "/library",
  "/opportunities",
  "/events",
  "/activities",
  "/stories",
  "/gallery",
  "/contact",
] as const;

function sitemapPlugin(configuredOrigin = ""): Plugin {
  const buildSitemap = (origin: string) =>
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    publicPages
      .map((path) => {
        const loc = path === "/" ? `${origin}/` : `${origin}${path}`;
        return `  <url><loc>${loc}</loc></url>`;
      })
      .join("\n") +
    `\n</urlset>\n`;

  return {
    name: "digital-thummapala-sitemap",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split("?")[0] !== "/sitemap.xml") {
          next();
          return;
        }
        const proto = req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
        const host = req.headers.host ?? "localhost:5173";
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        res.end(buildSitemap(`${proto}://${host}`));
      });
    },
    generateBundle() {
      const origin = configuredOrigin.trim().replace(/\/+$/, "");
      if (!origin) return;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(origin),
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
  plugins: [
    tailwindcss(),
    viteTsConfigPaths(),
    tanstackStart({ server: { entry: "server" } }),
    viteReact(),
    sitemapPlugin(env.VITE_SITE_URL),
    ...(process.env.npm_lifecycle_event === "build" ? [nitro({ preset: "vercel" })] : []),
  ],
  };
});
