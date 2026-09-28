import { createFileRoute } from "@tanstack/react-router";
import Activity from "../pages/Activity";

export const Route = createFileRoute("/activity")({
  head: () => ({
    meta: [
      { title: "Activity | TeamFlow" },
      { name: "description", content: "Chronological timeline of project, task and team updates in TeamFlow." },
      { property: "og:title", content: "Activity | TeamFlow" },
      { property: "og:description", content: "Chronological timeline of project, task and team updates in TeamFlow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Activity,
});
