import { createFileRoute } from "@tanstack/react-router";
import Settings from "../pages/Settings";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings | TeamFlow" },
      { name: "description", content: "Update your profile, account details and notification preferences." },
      { property: "og:title", content: "Settings | TeamFlow" },
      { property: "og:description", content: "Update your profile, account details and notification preferences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Settings,
});
