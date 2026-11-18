import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Village Activities | Thummapala" },
      { name: "description", content: "A glimpse of what is happening around Thummapala village." },
      { property: "og:title", content: "Village Activities | Thummapala" },
      { property: "og:description", content: "A glimpse of what is happening around Thummapala village." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return <InnerPage page="activities" />;
}
