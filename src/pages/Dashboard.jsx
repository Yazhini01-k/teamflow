import { Link } from "@tanstack/react-router";
import Layout from "../components/Layout";
import { projects, projectStatusVariant } from "../data/projects";
import { tasks } from "../data/tasks";
import { activities } from "../data/activities";
import { formatDate, countBy } from "../utils/format";

const overview = [
  { label: "Completed", value: 42, variant: "success" },
  { label: "In Progress", value: 28, variant: "primary" },
  { label: "Pending", value: 20, variant: "warning" },
  { label: "Overdue", value: 10, variant: "danger" },
];

export default function Dashboard() {
  const completed = countBy(tasks, "status", "Completed");
  const summary = [
    {
      label: "Total Projects",
      value: projects.length,
      icon: "bi-folder2-open",
      variant: "primary",
    },
    { label: "Total Tasks", value: tasks.length, icon: "bi-list-check", variant: "info" },
    { label: "Completed Tasks", value: completed, icon: "bi-check2-circle", variant: "success" },
    {
      label: "Pending Tasks",
      value: tasks.length - completed,
      icon: "bi-hourglass-split",
      variant: "warning",
    },
  ];

  return (
    <Layout
      title="Dashboard"
      subtitle="Welcome back, John. Here's what your team is working on."
      actions={
        <Link to="/projects" className="btn btn-primary">
          <i className="bi bi-plus-lg me-1" aria-hidden="true" />
          New Project
        </Link>
      }
    >
      <div className="row g-3 mb-4">
        {summary.map((card) => (
          <div className="col-12 col-md-6 col-lg-3" key={card.label}>
            <div className="card h-100">
              <div className="card-body d-flex align-items-center gap-3">
                <span className={`tf-stat-icon bg-${card.variant}-subtle text-${card.variant}`}>
                  <i className={`bi ${card.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <div className="text-secondary small">{card.label}</div>
                  <div className="h4 mb-0">{card.value}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3">
        <div className="col-12 col-xl-8">
          <div className="card h-100">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h2 className="h6 mb-0">Recent Projects</h2>
              <Link to="/projects" className="btn btn-sm btn-outline-secondary">
                View all
              </Link>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="fw-semibold">{project.name}</td>
                      <td>
                        <span className={`badge text-bg-${projectStatusVariant[project.status]}`}>
                          {project.status}
                        </span>
                      </td>
                      <td style={{ minWidth: 140 }}>
                        <div className="progress" style={{ height: 6 }}>
                          <div
                            className="progress-bar"
                            style={{ width: `${project.progress}%` }}
                            role="progressbar"
                            aria-valuenow={project.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <small className="text-secondary">{project.progress}%</small>
                      </td>
                      <td className="text-secondary">{formatDate(project.dueDate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="card mb-3">
            <div className="card-header bg-white">
              <h2 className="h6 mb-0">Task Overview</h2>
            </div>
            <div className="card-body">
              {overview.map((item) => (
                <div className="mb-3" key={item.label}>
                  <div className="d-flex justify-content-between small mb-1">
                    <span>{item.label}</span>
                    <span className="text-secondary">{item.value}%</span>
                  </div>
                  <div className="progress" style={{ height: 8 }}>
                    <div
                      className={`progress-bar bg-${item.variant}`}
                      style={{ width: `${item.value}%` }}
                      role="progressbar"
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-white">
              <h2 className="h6 mb-0">Recent Activity</h2>
            </div>
            <ul className="list-group list-group-flush">
              {activities.map((item) => (
                <li className="list-group-item d-flex gap-3" key={item.id}>
                  <span className={`tf-stat-icon bg-${item.variant}-subtle text-${item.variant}`}>
                    <i className={`bi ${item.icon}`} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="small">
                      <strong>{item.user}</strong> {item.action}{" "}
                      <span className="text-primary">{item.target}</span>
                    </div>
                    <small className="text-secondary">{item.time}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
