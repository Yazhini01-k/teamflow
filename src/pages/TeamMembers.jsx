import { useState } from "react";
import Layout from "../components/Layout";
import { teamMembers, memberStatusVariant, getInitials } from "../data/teamMembers";

const emptyForm = { name: "", email: "", role: "", department: "Product", status: "Active" };

export default function TeamMembers() {
  const [members, setMembers] = useState(teamMembers);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const openModal = () => {
    setForm(emptyForm);
    setShowModal(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setMembers((prev) => [
      {
        id: Date.now(),
        name: form.name.trim(),
        email: form.email.trim(),
        role: form.role.trim() || "Team Member",
        department: form.department,
        status: form.status,
      },
      ...prev,
    ]);
    setShowModal(false);
  };

  return (
    <Layout
      title="Team Members"
      subtitle="Everyone collaborating inside TeamFlow."
      actions={
        <button type="button" className="btn btn-primary" onClick={openModal}>
          <i className="bi bi-person-plus me-1" aria-hidden="true" />
          Invite Member
        </button>
      }
    >
      <div className="row g-3 mb-4">
        {members.map((member) => (
          <div className="col-12 col-md-6 col-xl-4" key={member.id}>
            <div className="card h-100">
              <div className="card-body d-flex gap-3">
                <span className="tf-avatar tf-avatar-lg">{getInitials(member.name)}</span>
                <div>
                  <h2 className="h6 mb-1">{member.name}</h2>
                  <div className="text-secondary small">{member.email}</div>
                  <div className="small mt-1">{member.role}</div>
                  <div className="d-flex gap-2 mt-2">
                    <span className="badge text-bg-light">{member.department}</span>
                    <span className={`badge text-bg-${memberStatusVariant[member.status]}`}>
                      {member.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header bg-white">
          <h2 className="h6 mb-0">All Members</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Member</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td className="d-flex align-items-center gap-2">
                    <span className="tf-avatar tf-avatar-sm">{getInitials(member.name)}</span>
                    <span className="fw-semibold">{member.name}</span>
                  </td>
                  <td className="text-secondary">{member.email}</td>
                  <td>{member.role}</td>
                  <td>{member.department}</td>
                  <td>
                    <span className={`badge text-bg-${memberStatusVariant[member.status]}`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <form onSubmit={handleSubmit}>
                  <div className="modal-header">
                    <h5 className="modal-title">Invite Member</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="member-name">Full Name</label>
                      <input
                        id="member-name"
                        name="name"
                        type="text"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="member-email">Email</label>
                      <input
                        id="member-email"
                        name="email"
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="member-role">Role</label>
                      <input
                        id="member-role"
                        name="role"
                        type="text"
                        className="form-control"
                        placeholder="e.g. Frontend Developer"
                        value={form.role}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="form-label" htmlFor="member-department">Department</label>
                        <select
                          id="member-department"
                          name="department"
                          className="form-select"
                          value={form.department}
                          onChange={handleChange}
                        >
                          <option>Product</option>
                          <option>Engineering</option>
                          <option>Design</option>
                          <option>Marketing</option>
                          <option>QA</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label className="form-label" htmlFor="member-status">Status</label>
                        <select
                          id="member-status"
                          name="status"
                          className="form-select"
                          value={form.status}
                          onChange={handleChange}
                        >
                          <option>Active</option>
                          <option>Away</option>
                          <option>Offline</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Send Invite
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={() => setShowModal(false)} />
        </>
      )}
    </Layout>
  );
}
