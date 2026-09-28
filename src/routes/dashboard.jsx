import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../pages/Dashboard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard | TeamFlow" },
      { name: "description", content: "Team workload overview: projects, tasks, progress and recent activity." },
      { property: "og:title", content: "Dashboard | TeamFlow" },
      { property: "og:description", content: "Team workload overview: projects, tasks, progress and recent activity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});
