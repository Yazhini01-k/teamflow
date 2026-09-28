import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ title, subtitle, actions, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="tf-app">
      <Navbar onToggleSidebar={() => setMobileOpen((open) => !open)} />
      <div className="tf-body">
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <main className="tf-content">
          <div className="container-fluid p-3 p-lg-4">
            {title ? (
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
                <div>
                  <h1 className="h3 mb-1">{title}</h1>
                  {subtitle ? <p className="text-secondary mb-0">{subtitle}</p> : null}
                </div>
                {actions ? <div className="d-flex gap-2">{actions}</div> : null}
              </div>
            ) : null}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
