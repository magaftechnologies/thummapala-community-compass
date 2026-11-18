import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories | Thummapala" },
      { name: "description", content: "Stories of people from Thummapala who are moving forward." },
      { property: "og:title", content: "Success Stories | Thummapala" },
      { property: "og:description", content: "Stories of people from Thummapala who are moving forward." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return <InnerPage page="stories" />;
}
