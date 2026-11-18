import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Thummapala" },
      { name: "description", content: "A few moments from Thummapala — village, learning, farms and sports." },
      { property: "og:title", content: "Gallery | Thummapala" },
      { property: "og:description", content: "A few moments from Thummapala — village, learning, farms and sports." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return <InnerPage page="gallery" />;
}
