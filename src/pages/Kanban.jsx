import Layout from "../components/Layout";
import { tasks, priorityVariant, taskStatuses } from "../data/tasks";
import { getInitials } from "../data/teamMembers";
import { formatDate } from "../utils/format";

const columnAccent = {
  "To Do": "secondary",
  "In Progress": "primary",
  Review: "warning",
  Completed: "success",
};

export default function Kanban() {
  return (
    <Layout title="Kanban Board" subtitle="Visualise task flow across stages.">
      <div className="tf-kanban">
        {taskStatuses.map((column) => {
          const columnTasks = tasks.filter((task) => task.status === column);
          return (
            <div className="tf-kanban-col" key={column}>
              <div className="card h-100">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                  <span className="fw-semibold">
                    <i
                      className={`bi bi-circle-fill me-2 text-${columnAccent[column]}`}
                      style={{ fontSize: "0.5rem" }}
                      aria-hidden="true"
                    />
                    {column}
                  </span>
                  <span className="badge text-bg-light">{columnTasks.length}</span>
                </div>
                <div className="card-body d-grid gap-2">
                  {columnTasks.map((task) => (
                    <div className="card" key={task.id}>
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <h3 className="h6 mb-1">{task.title}</h3>
                          <span className={`badge text-bg-${priorityVariant[task.priority]}`}>
                            {task.priority}
                          </span>
                        </div>
                        <p className="text-secondary small mb-3">{task.project}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="tf-avatar tf-avatar-sm" title={task.assignedTo}>
                            {getInitials(task.assignedTo)}
                          </span>
                          <small className="text-secondary">
                            <i className="bi bi-calendar-event me-1" aria-hidden="true" />
                            {formatDate(task.dueDate)}
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                  {columnTasks.length === 0 ? (
                    <p className="text-secondary small mb-0">No tasks here.</p>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
