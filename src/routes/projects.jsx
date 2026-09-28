import { createFileRoute } from "@tanstack/react-router";
import Projects from "../pages/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | TeamFlow" },
      { name: "description", content: "Browse and track every TeamFlow project with progress, owners and due dates." },
      { property: "og:title", content: "Projects | TeamFlow" },
      { property: "og:description", content: "Browse and track every TeamFlow project with progress, owners and due dates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});
