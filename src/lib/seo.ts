export type SeoPage = {
  path: "/" | "/our-village" | "/education" | "/agrotech" | "/sports" | "/library" | "/opportunities" | "/events" | "/activities" | "/stories" | "/gallery" | "/contact";
  title: string;
  description: string;
  image?: string;
};

export const defaultSeoImage = "/images/digital-thummapala-village.png";

export function getSiteUrl(): string {
  return (import.meta.env.VITE_SITE_URL ?? "").trim().replace(/\/+$/, "");
}

export function absoluteSeoUrl(path: string, image = false): string | undefined {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return undefined;
  if (image) return new URL(path.replace(/^\/+/, ""), `${siteUrl}/`).toString();
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

export function getPageSeo(page: SeoPage) {
  const canonical = absoluteSeoUrl(page.path);
  const ogImage = absoluteSeoUrl(page.image ?? defaultSeoImage, true);
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Digital Thummapala" },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
      ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
    ],
    links: [
      ...(canonical ? [{ rel: "canonical", href: canonical }] : []),
    ],
  };
}
