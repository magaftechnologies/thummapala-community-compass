import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => getPageSeo({
    path: "/gallery",
    title: "Thummapala Village Gallery | Digital Thummapala",
    description:
      "View the Thummapala village gallery: community life, education, agriculture, sports, people and Library Week photographs.",
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return <InnerPage page="gallery" />;
}
