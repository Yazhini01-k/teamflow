import { createFileRoute } from "@tanstack/react-router";
import Kanban from "../pages/Kanban";

export const Route = createFileRoute("/kanban")({
  head: () => ({
    meta: [
      { title: "Kanban Board | TeamFlow" },
      { name: "description", content: "Visualise tasks across To Do, In Progress, Review and Completed columns." },
      { property: "og:title", content: "Kanban Board | TeamFlow" },
      { property: "og:description", content: "Visualise tasks across To Do, In Progress, Review and Completed columns." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kanban,
});
