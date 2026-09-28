import { createFileRoute } from "@tanstack/react-router";
import Register from "../pages/Register";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account | TeamFlow" },
      { name: "description", content: "Create a TeamFlow account and start organising your team’s projects and tasks." },
      { property: "og:title", content: "Create Account | TeamFlow" },
      { property: "og:description", content: "Create a TeamFlow account and start organising your team’s projects and tasks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Register,
});
