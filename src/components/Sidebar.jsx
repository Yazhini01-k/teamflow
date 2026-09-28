import { Link } from "@tanstack/react-router";

export const menuItems = [
  { to: "/dashboard", label: "Dashboard", icon: "bi-speedometer2" },
  { to: "/projects", label: "Projects", icon: "bi-folder2-open" },
  { to: "/tasks", label: "Tasks", icon: "bi-list-check" },
  { to: "/kanban", label: "Kanban", icon: "bi-kanban" },
  { to: "/calendar", label: "Calendar", icon: "bi-calendar3" },
  { to: "/team", label: "Team Members", icon: "bi-people" },
  { to: "/activity", label: "Activity", icon: "bi-activity" },
  { to: "/notifications", label: "Notifications", icon: "bi-bell" },
  { to: "/settings", label: "Settings", icon: "bi-gear" },
];

function SidebarNav({ onNavigate }) {
  return (
    <nav className="nav flex-column tf-sidebar-nav p-3">
      {menuItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className="nav-link tf-nav-link d-flex align-items-center gap-2"
          activeProps={{ className: "active" }}
        >
          <i className={`bi ${item.icon}`} aria-hidden="true" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      <aside className="tf-sidebar d-none d-lg-block">
        <div className="tf-sidebar-brand d-flex align-items-center gap-2 px-3">
          <span className="tf-logo-mark">
            <i className="bi bi-diagram-3-fill" aria-hidden="true" />
          </span>
          <span className="fw-bold">TeamFlow</span>
        </div>
        <SidebarNav />
      </aside>

      {mobileOpen ? (
        <>
          <div className="tf-backdrop d-lg-none" onClick={onClose} />
          <aside className="tf-sidebar tf-sidebar-mobile d-lg-none">
            <div className="tf-sidebar-brand d-flex align-items-center justify-content-between px-3">
              <span className="d-flex align-items-center gap-2">
                <span className="tf-logo-mark">
                  <i className="bi bi-diagram-3-fill" aria-hidden="true" />
                </span>
                <span className="fw-bold">TeamFlow</span>
              </span>
              <button
                type="button"
                className="btn btn-sm btn-light"
                onClick={onClose}
                aria-label="Close menu"
              >
                <i className="bi bi-x-lg" aria-hidden="true" />
              </button>
            </div>
            <SidebarNav onNavigate={onClose} />
          </aside>
        </>
      ) : null}
    </>
  );
}
