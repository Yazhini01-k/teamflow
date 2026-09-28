import { Link } from "@tanstack/react-router";
import { notifications } from "../data/notifications";

export default function Navbar({ onToggleSidebar }) {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <nav className="navbar tf-navbar bg-white border-bottom sticky-top">
      <div className="container-fluid gap-2">
        <button
          type="button"
          className="btn btn-light d-lg-none"
          onClick={onToggleSidebar}
          aria-label="Toggle menu"
        >
          <i className="bi bi-list" aria-hidden="true" />
        </button>

        <Link to="/dashboard" className="navbar-brand d-flex align-items-center gap-2 mb-0">
          <span className="tf-logo-mark">
            <i className="bi bi-diagram-3-fill" aria-hidden="true" />
          </span>
          <span className="fw-bold d-none d-sm-inline">TeamFlow</span>
        </Link>

        <form className="tf-search flex-grow-1 d-none d-md-block" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <span className="input-group-text bg-body-secondary border-0">
              <i className="bi bi-search" aria-hidden="true" />
            </span>
            <input
              type="search"
              className="form-control bg-body-secondary border-0"
              placeholder="Search projects, tasks, people..."
              aria-label="Search"
            />
          </div>
        </form>

        <div className="d-flex align-items-center gap-2 ms-auto">
          <Link
            to="/notifications"
            className="btn btn-light position-relative"
            aria-label="Notifications"
          >
            <i className="bi bi-bell" aria-hidden="true" />
            {unreadCount > 0 ? (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {unreadCount}
              </span>
            ) : null}
          </Link>

          <div className="dropdown">
            <button
              className="btn btn-light d-flex align-items-center gap-2 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="tf-avatar tf-avatar-sm">JS</span>
              <span className="d-none d-sm-inline small fw-semibold">John Smith</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/settings">
                  <i className="bi bi-person me-2" aria-hidden="true" />
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/settings">
                  <i className="bi bi-gear me-2" aria-hidden="true" />
                  Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item text-danger" to="/login">
                  <i className="bi bi-box-arrow-right me-2" aria-hidden="true" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/login" className="btn btn-outline-secondary d-none d-lg-inline-flex">
            <i className="bi bi-box-arrow-right me-1" aria-hidden="true" />
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
