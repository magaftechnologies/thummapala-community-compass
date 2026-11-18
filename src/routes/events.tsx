import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Thummapala" },
      { name: "description", content: "Upcoming community events in Thummapala, Anakapalli." },
      { property: "og:title", content: "Events | Thummapala" },
      { property: "og:description", content: "Upcoming community events in Thummapala, Anakapalli." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return <InnerPage page="events" />;
}
