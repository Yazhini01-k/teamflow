import { createFileRoute } from "@tanstack/react-router";
import Login from "../pages/Login";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | TeamFlow" },
      { name: "description", content: "Sign in to your TeamFlow workspace to manage projects, tasks and your team." },
      { property: "og:title", content: "Login | TeamFlow" },
      { property: "og:description", content: "Sign in to your TeamFlow workspace to manage projects, tasks and your team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Login,
});
