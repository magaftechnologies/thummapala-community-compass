import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/stories")({
  head: () => getPageSeo({
    path: "/stories",
    title: "Thummapala Success Stories | Digital Thummapala",
    description:
      "Read approved community stories from Thummapala covering education, community participation and Kho-Kho team spirit.",
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return <InnerPage page="stories" />;
}
