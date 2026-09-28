import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import {
  tasks as initialTasks,
  priorityVariant,
  taskStatusVariant,
  taskStatuses,
  taskPriorities,
} from "../data/tasks";
import { projects } from "../data/projects";
import { teamMembers } from "../data/teamMembers";
import { formatDate } from "../utils/format";

const emptyForm = {
  title: "",
  project: projects[0]?.name ?? "",
  assignedTo: teamMembers[0]?.name ?? "",
  priority: "Medium",
  status: "To Do",
  dueDate: "",
};

export default function Tasks() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [taskList, setTaskList] = useState(initialTasks);
  const [modal, setModal] = useState(null); // null | { mode: "add" | "edit", id? }
  const [form, setForm] = useState(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const visibleTasks = useMemo(
    () =>
      taskList.filter((task) => {
        const matchesSearch = task.title
          .toLowerCase()
          .includes(search.trim().toLowerCase());
        const matchesStatus = status === "All" || task.status === status;
        const matchesPriority = priority === "All" || task.priority === priority;
        return matchesSearch && matchesStatus && matchesPriority;
      }),
    [search, status, priority, taskList],
  );

  const openAdd = () => {
    setForm(emptyForm);
    setModal({ mode: "add" });
  };

  const openEdit = (task) => {
    setForm({
      title: task.title,
      project: task.project,
      assignedTo: task.assignedTo,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
    });
    setModal({ mode: "edit", id: task.id });
  };

  const closeModal = () => setModal(null);

  const updateField = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      title: form.title.trim(),
      project: form.project,
      assignedTo: form.assignedTo,
      priority: form.priority,
      status: form.status,
      dueDate: form.dueDate || new Date().toISOString().slice(0, 10),
    };
    if (modal.mode === "edit") {
      setTaskList((current) =>
        current.map((task) => (task.id === modal.id ? { ...task, ...values } : task)),
      );
    } else {
      setTaskList((current) => [{ id: Date.now(), ...values }, ...current]);
    }
    setModal(null);
  };

  const confirmDelete = () => {
    setTaskList((current) => current.filter((task) => task.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <Layout
      title="Tasks"
      subtitle="All team tasks in one place."
      actions={
        <button type="button" className="btn btn-primary" onClick={openAdd}>
          <i className="bi bi-plus-lg me-1" aria-hidden="true" />
          Add Task
        </button>
      }
    >
      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-12 col-lg-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search" aria-hidden="true" />
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search tasks"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <select
                className="form-select"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                aria-label="Filter by status"
              >
                <option value="All">All statuses</option>
                {taskStatuses.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6 col-lg-3">
              <select
                className="form-select"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
                aria-label="Filter by priority"
              >
                <option value="All">All priorities</option>
                {taskPriorities.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Task</th>
                <th>Project</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due Date</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleTasks.map((task) => (
                <tr key={task.id}>
                  <td className="fw-semibold">{task.title}</td>
                  <td className="text-secondary">{task.project}</td>
                  <td>{task.assignedTo}</td>
                  <td>
                    <span className={`badge text-bg-${priorityVariant[task.priority]}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`badge text-bg-${taskStatusVariant[task.status]}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="text-secondary">{formatDate(task.dueDate)}</td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        aria-label="Edit task"
                        onClick={() => openEdit(task)}
                      >
                        <i className="bi bi-pencil" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        aria-label="Delete task"
                        onClick={() => setDeleteTarget(task)}
                      >
                        <i className="bi bi-trash" aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {visibleTasks.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-secondary py-4">
                    No tasks found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      {modal ? (
        <>
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="taskModalTitle"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <form onSubmit={handleSubmit}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="taskModalTitle">
                      {modal.mode === "edit" ? "Edit Task" : "Add Task"}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="taskTitle">
                        Task title
                      </label>
                      <input
                        id="taskTitle"
                        type="text"
                        className="form-control"
                        value={form.title}
                        onChange={(event) => updateField("title", event.target.value)}
                        required
                      />
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <label className="form-label" htmlFor="taskProject">
                          Project
                        </label>
                        <select
                          id="taskProject"
                          className="form-select"
                          value={form.project}
                          onChange={(event) => updateField("project", event.target.value)}
                        >
                          {projects.map((project) => (
                            <option key={project.id} value={project.name}>
                              {project.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-6">
                        <label className="form-label" htmlFor="taskAssignee">
                          Assigned to
                        </label>
                        <select
                          id="taskAssignee"
                          className="form-select"
                          value={form.assignedTo}
                          onChange={(event) => updateField("assignedTo", event.target.value)}
                        >
                          {teamMembers.map((member) => (
                            <option key={member.id} value={member.name}>
                              {member.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <label className="form-label" htmlFor="taskPriority">
                          Priority
                        </label>
                        <select
                          id="taskPriority"
                          className="form-select"
                          value={form.priority}
                          onChange={(event) => updateField("priority", event.target.value)}
                        >
                          {taskPriorities.map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-6">
                        <label className="form-label" htmlFor="taskStatus">
                          Status
                        </label>
                        <select
                          id="taskStatus"
                          className="form-select"
                          value={form.status}
                          onChange={(event) => updateField("status", event.target.value)}
                        >
                          {taskStatuses.map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="taskDueDate">
                        Due date
                      </label>
                      <input
                        id="taskDueDate"
                        type="date"
                        className="form-control"
                        value={form.dueDate}
                        onChange={(event) => updateField("dueDate", event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {modal.mode === "edit" ? "Save Changes" : "Create Task"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal} />
        </>
      ) : null}

      {deleteTarget ? (
        <>
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="deleteTaskTitle"
          >
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteTaskTitle">
                    Delete Task
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setDeleteTarget(null)}
                  />
                </div>
                <div className="modal-body">
                  Delete <strong>{deleteTarget.title}</strong>? This cannot be undone.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setDeleteTarget(null)}
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={() => setDeleteTarget(null)} />
        </>
      ) : null}
    </Layout>
  );
}
