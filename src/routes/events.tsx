import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/events")({
  head: () => getPageSeo({
    path: "/events",
    title: "Events in Thummapala | Digital Thummapala",
    description:
      "Explore upcoming and proposed events in Thummapala, Anakapalli District, Andhra Pradesh. Future concepts remain clearly marked as coming soon.",
  }),
  component: EventsPage,
});

function EventsPage() {
  return <InnerPage page="events" />;
}
