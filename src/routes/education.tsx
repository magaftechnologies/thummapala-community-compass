import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/education")({
  head: () => getPageSeo({
    path: "/education",
    title: "Education in Thummapala | Digital Thummapala",
    description:
      "Explore education in Thummapala, including Thummapala High School, school support, extra learning, digital skills and community career guidance concepts.",
  }),
  component: EducationPage,
});

function EducationPage() {
  return <InnerPage page="education" />;
}
