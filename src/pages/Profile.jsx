import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Profile() {
  return (
    <div>
      <Navbar />
      <div class="container py-5">
        <div class="row py-5">
          <img
            class="rounded-circle mx-auto d-block py-3"
            style={{ width: "200px" }}
            src="/img/ava.jpg"
            alt="avatar"
          />
          <p class="text-center fw-bold">Account Name</p>
        </div>
        <div class="row">
          <div class="col">
            <ul class="navbar-nav d-flex flex-md-row gap-5">
              <li class="nav-item">
                <a class="nav-link fw-bold fs-5" href="/">
                  My Recipe
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold fs-5" href="/">
                  Saved Recipe
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold fs-5" href="/">
                  Liked Recipe
                </a>
              </li>
            </ul>
          </div>
          <hr style={{ width: "100%" }} />
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xs-12 mb-4">
              <div
                class="menu-background"
                style={{ backgroundImage: "url(/img/1.jpg)" }}
              >
                <h3 class="popular-menu-list">Chiken Kare</h3>
              </div>
            </div>

            <div class="col-md-3 col-xs-12 mb-4">
              <div
                class="menu-background"
                style={{ backgroundImage: "url(/img/1.jpg)" }}
              >
                <h3 class="popular-menu-list">Chiken Kare</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
