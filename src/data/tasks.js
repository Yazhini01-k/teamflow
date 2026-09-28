export const tasks = [
  {
    id: 1,
    title: "Design new landing page",
    project: "Website Redesign",
    assignedTo: "Emily Davis",
    priority: "High",
    status: "In Progress",
    dueDate: "2026-08-28",
  },
  {
    id: 2,
    title: "Set up analytics tracking",
    project: "Website Redesign",
    assignedTo: "John Smith",
    priority: "Medium",
    status: "To Do",
    dueDate: "2026-09-04",
  },
  {
    id: 3,
    title: "Build onboarding screens",
    project: "Mobile Application",
    assignedTo: "David Wilson",
    priority: "High",
    status: "Review",
    dueDate: "2026-08-30",
  },
  {
    id: 4,
    title: "Push notification service",
    project: "Mobile Application",
    assignedTo: "Michael Brown",
    priority: "Low",
    status: "To Do",
    dueDate: "2026-09-15",
  },
  {
    id: 5,
    title: "Write campaign copy",
    project: "Marketing Campaign",
    assignedTo: "Sarah Johnson",
    priority: "Medium",
    status: "Completed",
    dueDate: "2026-08-10",
  },
  {
    id: 6,
    title: "Ad creative review",
    project: "Marketing Campaign",
    assignedTo: "Emily Davis",
    priority: "Low",
    status: "Completed",
    dueDate: "2026-08-12",
  },
  {
    id: 7,
    title: "Checkout flow prototype",
    project: "E-Commerce Platform",
    assignedTo: "John Smith",
    priority: "High",
    status: "In Progress",
    dueDate: "2026-08-22",
  },
  {
    id: 8,
    title: "Inventory data model",
    project: "E-Commerce Platform",
    assignedTo: "David Wilson",
    priority: "Medium",
    status: "Review",
    dueDate: "2026-09-08",
  },
  {
    id: 9,
    title: "Accessibility audit",
    project: "Website Redesign",
    assignedTo: "Michael Brown",
    priority: "High",
    status: "To Do",
    dueDate: "2026-08-19",
  },
];

export const priorityVariant = {
  High: "danger",
  Medium: "warning",
  Low: "info",
};

export const taskStatusVariant = {
  "To Do": "secondary",
  "In Progress": "primary",
  Review: "warning",
  Completed: "success",
};

export const taskStatuses = ["To Do", "In Progress", "Review", "Completed"];
export const taskPriorities = ["High", "Medium", "Low"];
