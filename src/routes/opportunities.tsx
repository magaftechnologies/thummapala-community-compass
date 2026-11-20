import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities | Digital Thummapala" },
      { name: "description", content: "Jobs, scholarships, internships and training opportunities are coming soon to Digital Thummapala." },
      { property: "og:title", content: "Opportunities | Digital Thummapala" },
      { property: "og:description", content: "Jobs, scholarships, internships and training opportunities are coming soon to Digital Thummapala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OpportunitiesPage,
});

function OpportunitiesPage() {
  return <InnerPage page="opportunities" />;
}
