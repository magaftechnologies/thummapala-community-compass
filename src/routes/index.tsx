import { createFileRoute } from "@tanstack/react-router";
import { VillageExperience } from "@/components/village/experience";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thummapala | Education, Agriculture, Sports & Community" },
      {
        name: "description",
        content:
          "Discover Thummapala — a growing community focused on education, career opportunities, agriculture, sports, technology and community development.",
      },
      { property: "og:title", content: "Thummapala — Our village. Our people. Our future." },
      {
        property: "og:description",
        content:
          "Discover Thummapala, Anakapalli — rooted in nature, growing through education, agriculture, sports and opportunity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <VillageExperience />;
}
