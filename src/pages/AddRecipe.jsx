import React from "react";
import "../styles/AddRecipe.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AddRecipe() {
  return (
    <div>
      <Navbar />

      <div className="col d-flex flex-column">
        <div className="row py-5 justify-content-center">
          <div className="col-7">
            <form>
              <div className="upload d-flex justify-content-center">
                <label>
                  <input
                    className="form-control mb-3"
                    type="file"
                    name="img"
                    accept="image/*,.pdf"
                    style={{ display: "none" }}
                  />
                  <img
                    src="/img/add.png"
                    alt="img-logo"
                    style={{ width: "50px" }}
                  />
                </label>
              </div>
              <input
                type="text"
                className="form-control mb-3"
                name="tittle"
                id="tittle"
                placeholder="Tittle"
              />
              <textarea
                className="form-control mb-3"
                name="ingredients"
                id="ingredients"
                cols="35"
                rows="5"
                placeholder="Ingredients"
              ></textarea>
              <input
                type="text"
                className="form-control mb-3"
                name="videos"
                id="videos"
                placeholder="Videos"
              />
              <button type="submit" className="btn btn-warning mx-auto d-block">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddRecipe;
