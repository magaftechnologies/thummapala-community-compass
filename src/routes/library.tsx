import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/library")({
  head: () => getPageSeo({
    path: "/library",
    title: "Thummapala Library | Digital Thummapala",
    description:
      "Explore the Thummapala village library through Library Week photographs, readers and community gatherings focused on reading and learning.",
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return <InnerPage page="library" />;
}
