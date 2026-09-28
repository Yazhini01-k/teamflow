import { useState } from "react";
import Layout from "../components/Layout";

const STORAGE_KEY = "teamflow-settings";

const defaults = {
  fullName: "John Smith",
  profileEmail: "john.smith@teamflow.io",
  phone: "+1 555 0134",
  username: "johnsmith",
  password: "password",
  language: "English",
  emailNotifications: true,
  taskNotifications: true,
  projectNotifications: false,
  teamNotifications: true,
};

const loadSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...defaults, ...JSON.parse(saved) };
  } catch {
    // ignore corrupted storage
  }
  return defaults;
};

const notificationToggles = [
  { id: "emailNotifications", label: "Email notifications" },
  { id: "taskNotifications", label: "Task notifications" },
  { id: "projectNotifications", label: "Project notifications" },
  { id: "teamNotifications", label: "Team notifications" },
];

export default function Settings() {
  const [settings, setSettings] = useState(loadSettings);
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { id, type, checked, value } = event.target;
    setSettings((prev) => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  };

  const handleCancel = () => {
    setSettings(loadSettings());
    setSaved(false);
  };

  return (
    <Layout title="Settings" subtitle="Manage your profile, account and notifications.">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-header bg-white">
              <h2 className="h6 mb-0">Profile Settings</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="fullName">Name</label>
                <input
                  id="fullName"
                  className="form-control"
                  value={settings.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="profileEmail">Email</label>
                <input
                  id="profileEmail"
                  type="email"
                  className="form-control"
                  value={settings.profileEmail}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="form-control"
                  value={settings.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-header bg-white">
              <h2 className="h6 mb-0">Account Settings</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="username">Username</label>
                <input
                  id="username"
                  className="form-control"
                  value={settings.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={settings.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="language">Language</label>
                <select
                  id="language"
                  className="form-select"
                  value={settings.language}
                  onChange={handleChange}
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-header bg-white">
              <h2 className="h6 mb-0">Notification Settings</h2>
            </div>
            <div className="card-body row g-3">
              {notificationToggles.map((toggle) => (
                <div className="col-12 col-md-6" key={toggle.id}>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id={toggle.id}
                      checked={settings[toggle.id]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={toggle.id}>
                      {toggle.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer bg-white d-flex justify-content-end align-items-center gap-2">
              {saved && (
                <span className="text-success small me-auto">
                  <i className="bi bi-check-circle me-1" aria-hidden="true" />
                  Settings saved successfully.
                </span>
              )}
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
