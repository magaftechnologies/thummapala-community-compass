import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/sports")({
  head: () => getPageSeo({
    path: "/sports",
    title: "Sports in Thummapala | Digital Thummapala",
    description:
      "Discover sports in Thummapala, including Kho-Kho, village sporting talent, teamwork and community youth activities.",
  }),
  component: SportsPage,
});

function SportsPage() {
  return <InnerPage page="sports" />;
}
