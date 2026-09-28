import Layout from "../components/Layout";
import { activities } from "../data/activities";

export default function Activity() {
  return (
    <Layout title="Activity" subtitle="A timeline of what your team has been doing.">
      <div className="card">
        <ul className="list-group list-group-flush">
          {activities.map((item) => (
            <li className="list-group-item d-flex gap-3 py-3" key={item.id}>
              <span className={`tf-stat-icon bg-${item.variant}-subtle text-${item.variant}`}>
                <i className={`bi ${item.icon}`} aria-hidden="true" />
              </span>
              <div className="flex-grow-1">
                <div>
                  <strong>{item.user}</strong> {item.action}{" "}
                  <span className="text-primary">{item.target}</span>
                </div>
                <small className="text-secondary">
                  <i className="bi bi-clock me-1" aria-hidden="true" />
                  {item.time}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
