import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/village/experience";
import { getPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => getPageSeo({
    path: "/contact",
    title: "Contact Digital Thummapala | Thummapala Village",
    description:
      "Contact Digital Thummapala with a question or idea about Thummapala village, community programmes, education, agriculture or sports.",
  }),
  component: ContactPage,
});

function ContactPage() {
  return <InnerPage page="contact" />;
}
