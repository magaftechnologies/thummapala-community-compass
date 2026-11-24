import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/our-village")({
  head: () => getPageSeo({
    path: "/our-village",
    title: "About Thummapala Village | Digital Thummapala",
    description:
      "Learn about Thummapala village in Anakapalli Mandal, Anakapalli District, Andhra Pradesh — its people, agriculture, education, sports and community.",
  }),
  component: OurVillagePage,
});

function OurVillagePage() {
  return <InnerPage page="our-village" />;
}
