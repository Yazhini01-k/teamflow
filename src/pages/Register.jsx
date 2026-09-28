import { Link, useNavigate } from "@tanstack/react-router";

export default function Register() {
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
              <h1 className="h3 mb-1">Create your account</h1>
              <p className="text-secondary mb-0">Start managing work with TeamFlow</p>
            </div>
            <div className="card">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="regName">Full Name</label>
                    <input id="regName" className="form-control" placeholder="John Smith" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="regEmail">Email</label>
                    <input
                      id="regEmail"
                      type="email"
                      className="form-control"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="regPassword">Password</label>
                    <input id="regPassword" type="password" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="regConfirm">Confirm Password</label>
                    <input id="regConfirm" type="password" className="form-control" required />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <i className="bi bi-person-plus me-1" aria-hidden="true" />
                    Register
                  </button>
                </form>
                <p className="text-center text-secondary small mt-3 mb-0">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
