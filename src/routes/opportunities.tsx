import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/opportunities")({
  head: () => getPageSeo({
    path: "/opportunities",
    title: "Opportunities in Thummapala | Digital Thummapala",
    description:
      "Learn about future jobs, scholarships, internships and training opportunities in Thummapala; current concepts are clearly marked as coming soon.",
  }),
  component: OpportunitiesPage,
});

function OpportunitiesPage() {
  return <InnerPage page="opportunities" />;
}
