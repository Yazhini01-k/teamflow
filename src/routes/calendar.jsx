import { createFileRoute } from "@tanstack/react-router";
import Calendar from "../pages/Calendar";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar | TeamFlow" },
      { name: "description", content: "Monthly calendar of team deadlines, milestones and scheduled events." },
      { property: "og:title", content: "Calendar | TeamFlow" },
      { property: "og:description", content: "Monthly calendar of team deadlines, milestones and scheduled events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Calendar,
});
