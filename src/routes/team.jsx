import { createFileRoute } from "@tanstack/react-router";
import TeamMembers from "../pages/TeamMembers";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team Members | TeamFlow" },
      { name: "description", content: "Directory of TeamFlow members with roles, departments and availability." },
      { property: "og:title", content: "Team Members | TeamFlow" },
      { property: "og:description", content: "Directory of TeamFlow members with roles, departments and availability." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamMembers,
});
