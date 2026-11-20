import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Thummapala Library | Digital Thummapala" },
      {
        name: "description",
        content:
          "Explore Thummapala Library through photographs of Library Week, readers and community gatherings centered on reading, learning and participation.",
      },
      { property: "og:title", content: "Thummapala Library | Digital Thummapala" },
      {
        property: "og:description",
        content:
          "Photographs of Thummapala Library Week, readers and community gatherings around reading and learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return <InnerPage page="library" />;
}
