export const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Refresh the marketing site with a new design system.",
    members: ["John Smith", "Sarah Johnson", "Emily Davis"],
    progress: 78,
    status: "In Progress",
    dueDate: "2026-09-12",
  },
  {
    id: 2,
    name: "Mobile Application",
    description: "Cross-platform app for customers on iOS and Android.",
    members: ["David Wilson", "Michael Brown"],
    progress: 45,
    status: "In Progress",
    dueDate: "2026-10-02",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Q4 launch campaign across email, social and paid ads.",
    members: ["Sarah Johnson", "Emily Davis"],
    progress: 100,
    status: "Completed",
    dueDate: "2026-08-01",
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    description: "Storefront, checkout and inventory management build.",
    members: ["John Smith", "David Wilson", "Michael Brown"],
    progress: 22,
    status: "Pending",
    dueDate: "2026-11-20",
  },
];

export const projectStatusVariant = {
  Completed: "success",
  "In Progress": "primary",
  Pending: "secondary",
  Overdue: "danger",
};
