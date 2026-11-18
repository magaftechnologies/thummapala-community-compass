import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities | Thummapala" },
      { name: "description", content: "Sample jobs, scholarships, internships and training pathways for Thummapala youth." },
      { property: "og:title", content: "Opportunities | Thummapala" },
      { property: "og:description", content: "Sample jobs, scholarships, internships and training pathways for Thummapala youth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OpportunitiesPage,
});

function OpportunitiesPage() {
  return <InnerPage page="opportunities" />;
}
