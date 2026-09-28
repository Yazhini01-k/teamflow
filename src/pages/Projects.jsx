import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { projects as initialProjects, projectStatusVariant } from "../data/projects";
import { getInitials, teamMembers } from "../data/teamMembers";
import { formatDate } from "../utils/format";

const emptyForm = {
  name: "",
  description: "",
  status: "Pending",
  progress: 0,
  dueDate: "",
  members: [],
};

export default function Projects() {
  const [search, setSearch] = useState("");
  const [projectList, setProjectList] = useState(initialProjects);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const visibleProjects = useMemo(
    () =>
      projectList.filter((project) =>
        project.name.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [search, projectList],
  );

  const openModal = () => {
    setForm(emptyForm);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const updateField = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const toggleMember = (name) =>
    setForm((current) => ({
      ...current,
      members: current.members.includes(name)
        ? current.members.filter((member) => member !== name)
        : [...current.members, name],
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      id: Date.now(),
      name: form.name.trim(),
      description: form.description.trim() || "No description provided.",
      status: form.status,
      progress: Math.min(100, Math.max(0, Number(form.progress) || 0)),
      dueDate: form.dueDate || new Date().toISOString().slice(0, 10),
      members: form.members,
    };
    setProjectList((current) => [newProject, ...current]);
    setShowModal(false);
  };

  return (
    <Layout
      title="Projects"
      subtitle="Track progress across every active initiative."
      actions={
        <button type="button" className="btn btn-primary" onClick={openModal}>
          <i className="bi bi-plus-lg me-1" aria-hidden="true" />
          Add Project
        </button>
      }
    >
      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search" aria-hidden="true" />
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search projects"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {visibleProjects.length === 0 ? (
        <div className="alert alert-info">No projects match your search.</div>
      ) : null}

      <div className="row g-3">
        {visibleProjects.map((project) => (
          <div className="col-12 col-md-6 col-xl-4" key={project.id}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h2 className="h5 mb-0">{project.name}</h2>
                  <span className={`badge text-bg-${projectStatusVariant[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-secondary small flex-grow-1">{project.description}</p>

                <div className="d-flex align-items-center gap-1 mb-3">
                  {project.members.map((member) => (
                    <span className="tf-avatar tf-avatar-sm" key={member} title={member}>
                      {getInitials(member)}
                    </span>
                  ))}
                  <span className="text-secondary small ms-2">
                    {project.members.length} members
                  </span>
                </div>

                <div className="d-flex justify-content-between small mb-1">
                  <span>Progress</span>
                  <span className="text-secondary">{project.progress}%</span>
                </div>
                <div className="progress mb-3" style={{ height: 8 }}>
                  <div
                    className="progress-bar"
                    style={{ width: `${project.progress}%` }}
                    role="progressbar"
                    aria-valuenow={project.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>

                <div className="d-flex align-items-center text-secondary small">
                  <i className="bi bi-calendar-event me-2" aria-hidden="true" />
                  Due {formatDate(project.dueDate)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal ? (
        <>
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="addProjectTitle"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <form onSubmit={handleSubmit}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="addProjectTitle">
                      Add Project
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
                      <label className="form-label" htmlFor="projectName">
                        Project name
                      </label>
                      <input
                        id="projectName"
                        type="text"
                        className="form-control"
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="projectDescription">
                        Description
                      </label>
                      <textarea
                        id="projectDescription"
                        className="form-control"
                        rows={3}
                        value={form.description}
                        onChange={(event) => updateField("description", event.target.value)}
                      />
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <label className="form-label" htmlFor="projectStatus">
                          Status
                        </label>
                        <select
                          id="projectStatus"
                          className="form-select"
                          value={form.status}
                          onChange={(event) => updateField("status", event.target.value)}
                        >
                          <option>Pending</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                          <option>Overdue</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label className="form-label" htmlFor="projectProgress">
                          Progress (%)
                        </label>
                        <input
                          id="projectProgress"
                          type="number"
                          className="form-control"
                          min={0}
                          max={100}
                          value={form.progress}
                          onChange={(event) => updateField("progress", event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="projectDueDate">
                        Due date
                      </label>
                      <input
                        id="projectDueDate"
                        type="date"
                        className="form-control"
                        value={form.dueDate}
                        onChange={(event) => updateField("dueDate", event.target.value)}
                      />
                    </div>
                    <div>
                      <span className="form-label d-block">Team members</span>
                      <div className="d-flex flex-wrap gap-2">
                        {teamMembers.map((member) => (
                          <div className="form-check" key={member.name}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`member-${member.name}`}
                              checked={form.members.includes(member.name)}
                              onChange={() => toggleMember(member.name)}
                            />
                            <label className="form-check-label" htmlFor={`member-${member.name}`}>
                              {member.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Create Project
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal} />
        </>
      ) : null}
    </Layout>
  );
}
