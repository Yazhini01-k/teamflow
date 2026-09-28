import { createFileRoute } from "@tanstack/react-router";
import Notifications from "../pages/Notifications";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications | TeamFlow" },
      { name: "description", content: "Unread alerts for assigned tasks, completed work and upcoming deadlines." },
      { property: "og:title", content: "Notifications | TeamFlow" },
      { property: "og:description", content: "Unread alerts for assigned tasks, completed work and upcoming deadlines." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Notifications,
});
