import React from "react";
import { Link } from "react-router-dom";

import "../styles/auth.css";

function Login() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-6 left vh-100 d-flex justify-content-center align-items-center">
          <img className="logo" src="/img/logo.png" alt="img-logo" />
        </div>
        <div className="col-md-5 col-xs-10 right d-flex flex-column justify-content-center">
          <div className="container">
            <h1 className="text-center">Welcome</h1>
            <p className="text-center text-secondary">
              Log in into your exiting account
            </p>
            <div className="row justify-content-center">
              <div className="col col-7">
                <form>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="termsConditions"
                      name="termsConditions"
                    />
                    <label className="form-check-label">
                      I agree to terms [&] conditions
                    </label>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-warning">
                      Log in
                    </button>
                  </div>
                  <p className="text-end fs-6 fw-medium mt-3">
                    <a
                      href="./forgot-password.html"
                      className="text-decoration-none text-black text-body-secondary"
                    >
                      Forgot Password?
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <p className="text-center">
              Don't have an account?
              <Link
                to="/register"
                className="text-decoration-none"
                style={{ color: " #efc81a" }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
