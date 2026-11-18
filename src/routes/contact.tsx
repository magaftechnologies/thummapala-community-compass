import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Thummapala" },
      { name: "description", content: "Have a question or an idea? Get in touch and be part of Thummapala's journey." },
      { property: "og:title", content: "Contact | Thummapala" },
      { property: "og:description", content: "Have a question or an idea? Get in touch and be part of Thummapala's journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <InnerPage page="contact" />;
}
