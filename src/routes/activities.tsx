import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/activities")({
  head: () => getPageSeo({
    path: "/activities",
    title: "Activities in Thummapala | Digital Thummapala",
    description:
      "Browse community activities and photo stories from Thummapala village, including education, sports, agriculture and Library Week.",
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return <InnerPage page="activities" />;
}
