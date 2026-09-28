export const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@teamflow.io",
    role: "Product Manager",
    department: "Product",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@teamflow.io",
    role: "Marketing Lead",
    department: "Marketing",
    status: "Active",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david.wilson@teamflow.io",
    role: "Senior Engineer",
    department: "Engineering",
    status: "Away",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@teamflow.io",
    role: "UI/UX Designer",
    department: "Design",
    status: "Active",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@teamflow.io",
    role: "QA Engineer",
    department: "Engineering",
    status: "Offline",
  },
];

export const memberStatusVariant = {
  Active: "success",
  Away: "warning",
  Offline: "secondary",
};

export const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
