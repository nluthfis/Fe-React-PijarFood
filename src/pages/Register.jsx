import React from "react";
import "../styles/auth.css";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-6 col-xs-10 left vh-100 d-flex justify-content-center align-items-center">
          <img src="/img/logo.png" alt="img-logo" />
        </div>
        <div className="col-md-5 col-xs-10 right d-flex flex-column justify-content-center">
          <h1 className="text-center">Let's Get Started !</h1>
          <p className="text-center text-secondary">
            Create new account to access all features
          </p>
          <div className="row justify-content-center">
            <div className="col col-7">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control form-control-sm"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="mb-3">
                  <label for="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="phoneNumber"
                    className="form-control form-control-sm"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Create New Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    placeholder="Create new password"
                  />
                </div>
                <div className="mb-3">
                  <label for="2nd-password" className="form-label">
                    Re-type New Password
                  </label>
                  <input
                    type="2nd-password"
                    className="form-control form-control-sm"
                    id="2nd-password"
                    name="2nd-password"
                    placeholder="Re-type New Password"
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
                <p className="text-end">
                  <a
                    href="./forgot-password.html"
                    className="text-decoration-none text-black"
                  >
                    Forgot Password?
                  </a>
                </p>
              </form>
            </div>
          </div>
          <p className="text-center">
            Already have account?
            <Link
              to="/login"
              className="text-decoration-none"
              style={{ color: "#efc81a" }}
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
