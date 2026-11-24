import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/agrotech")({
  head: () => getPageSeo({
    path: "/agrotech",
    title: "Agriculture & Agrotech in Thummapala | Digital Thummapala",
    description:
      "Discover Thummapala agriculture and farming ideas, farmer knowledge and agrotech concepts rooted in the village and its land.",
  }),
  component: AgrotechPage,
});

function AgrotechPage() {
  return <InnerPage page="agrotech" />;
}
