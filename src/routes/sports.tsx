import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports | Thummapala" },
      { name: "description", content: "Kho-Kho and village sports in Thummapala — play, compete and grow." },
      { property: "og:title", content: "Sports | Thummapala" },
      { property: "og:description", content: "Kho-Kho and village sports in Thummapala — play, compete and grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SportsPage,
});

function SportsPage() {
  return <InnerPage page="sports" />;
}
