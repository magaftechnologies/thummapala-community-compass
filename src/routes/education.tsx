import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education | Thummapala" },
      { name: "description", content: "School support, extra learning, digital skills and career guidance for Thummapala students." },
      { property: "og:title", content: "Education | Thummapala" },
      { property: "og:description", content: "School support, extra learning, digital skills and career guidance for Thummapala students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return <InnerPage page="education" />;
}
