import { createFileRoute } from "@tanstack/react-router";
import Tasks from "../pages/Tasks";

export const Route = createFileRoute("/tasks")({
  head: () => ({
    meta: [
      { title: "Tasks | TeamFlow" },
      { name: "description", content: "Filter and manage all team tasks by status, priority, project and assignee." },
      { property: "og:title", content: "Tasks | TeamFlow" },
      { property: "og:description", content: "Filter and manage all team tasks by status, priority, project and assignee." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tasks,
});
