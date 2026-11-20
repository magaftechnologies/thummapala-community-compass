import { createFileRoute } from "@tanstack/react-router";
import { VillageExperience } from "@/components/village/experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Thummapala | Thummapala Village" },
      {
        name: "description",
        content:
          "Digital Thummapala — a digital platform for Thummapala village, connecting its people, education, agriculture, sports, opportunities, events and future initiatives.",
      },
      { property: "og:title", content: "Digital Thummapala | Thummapala Village" },
      {
        property: "og:description",
        content:
          "A digital platform connecting Thummapala village, its people, education, agriculture, sports, opportunities and future.",
      },
      { property: "og:image", content: "/images/digital-thummapala-village.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/digital-thummapala-village.png" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <VillageExperience />;
}
