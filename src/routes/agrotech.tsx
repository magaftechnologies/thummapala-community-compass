import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/agrotech")({
  head: () => ({
    meta: [
      { title: "Agrotech | Thummapala" },
      { name: "description", content: "Better ideas for better farming — agriculture learning and technology in Thummapala." },
      { property: "og:title", content: "Agrotech | Thummapala" },
      { property: "og:description", content: "Better ideas for better farming — agriculture learning and technology in Thummapala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgrotechPage,
});

function AgrotechPage() {
  return <InnerPage page="agrotech" />;
}
