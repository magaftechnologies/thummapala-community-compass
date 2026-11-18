import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/our-village")({
  head: () => ({
    meta: [
      { title: "Our Village | Thummapala" },
      { name: "description", content: "Learn about Thummapala in Anakapalli — its people, farms, schools and community spirit." },
      { property: "og:title", content: "Our Village | Thummapala" },
      { property: "og:description", content: "Learn about Thummapala in Anakapalli — its people, farms, schools and community spirit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurVillagePage,
});

function OurVillagePage() {
  return <InnerPage page="our-village" />;
}
