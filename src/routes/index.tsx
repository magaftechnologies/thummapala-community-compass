import { createFileRoute } from "@tanstack/react-router";
import { VillageExperience } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => getPageSeo({
    path: "/",
    title: "Digital Thummapala | Thummapala Village — Our Village, Our People, Our Future",
    description:
      "Explore Digital Thummapala, a community information website for Thummapala village in Anakapalli, Andhra Pradesh, covering education, agriculture, sports, the library, opportunities and village life.",
  }),
  component: Index,
});

function Index() {
  return <VillageExperience />;
}
