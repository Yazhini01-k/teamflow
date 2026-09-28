import Layout from "../components/Layout";
import { notifications } from "../data/notifications";

export default function Notifications() {
  const unreadCount = notifications.filter((item) => item.unread).length;

  return (
    <Layout
      title="Notifications"
      subtitle={`${unreadCount} unread notifications`}
      actions={
        <button type="button" className="btn btn-outline-secondary">
          <i className="bi bi-check2-all me-1" aria-hidden="true" />
          Mark all as read
        </button>
      }
    >
      <div className="card">
        <ul className="list-group list-group-flush">
          {notifications.map((item) => (
            <li
              className={`list-group-item d-flex gap-3 py-3 ${item.unread ? "bg-primary-subtle bg-opacity-10" : ""}`}
              key={item.id}
            >
              <span className={`tf-stat-icon bg-${item.variant}-subtle text-${item.variant}`}>
                <i className={`bi ${item.icon}`} aria-hidden="true" />
              </span>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <span className="fw-semibold">{item.title}</span>
                  {item.unread ? <span className="badge text-bg-danger">New</span> : null}
                </div>
                <div className="text-secondary small">{item.message}</div>
                <small className="text-secondary">{item.time}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
