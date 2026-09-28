import { Link, useNavigate } from "@tanstack/react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="tf-auth">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <div className="text-center mb-4">
              <span className="tf-logo-mark mb-2">
                <i className="bi bi-diagram-3-fill" aria-hidden="true" />
              </span>
              <h1 className="h3 mb-1">TeamFlow</h1>
              <p className="text-secondary mb-0">Sign in to your team workspace</p>
            </div>
            <div className="card">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="loginEmail">Email address</label>
                    <input
                      id="loginEmail"
                      type="email"
                      className="form-control"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                    <input
                      id="loginPassword"
                      type="password"
                      className="form-control"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <i className="bi bi-box-arrow-in-right me-1" aria-hidden="true" />
                    Login
                  </button>
                </form>
                <p className="text-center text-secondary small mt-3 mb-0">
                  Don't have an account? <Link to="/register">Create one</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
