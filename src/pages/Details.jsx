import React from "react";
import { useLocation } from "react-router";
import "../styles/Details.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import foodList from "../menu.json";

function Details() {
  const detailMenu = foodList.menu;
  const location = useLocation();
  const [currentList, setCurrentList] = React.useState(null);

  React.useEffect(() => {
    const currentSlug = location?.pathname?.split("/")[2];
    window.scrollTo(0, 0);
    setCurrentList(detailMenu.find((res) => res.slug === currentSlug));
  }, []);
  console.log(currentList);
  return (
    <div>
      <Navbar />
      <section id="content">
        <div class="container py-5">
          <h1 class="text-center text-primary">{currentList?.title}</h1>

          <div class="d-flex justify-content-center">
            <img
              src={`/img/${currentList?.image}`}
              class="food-image"
              alt="food-img"
            />
          </div>

          <div class="row mt-5 text-primary">
            <div class="col offset-md-2">
              <h2>Ingredients</h2>
              <ul>
                <li>3 buah kentang</li>
                <li>150gr ikan teri asin</li>
                <li>Garam, gula, kaldu bubuk</li>
                <li>7 buah bwg merah</li>
                <li>3 siung bwg putih</li>
                <li>5 buah cabe merah</li>
                <li>8 buah cabe rawit merah</li>
                <li>2 batang daun bawang</li>
              </ul>
            </div>
          </div>

          <div class="row mt-5 text-primary">
            <div class="col offset-md-2">
              <h2>Video Step</h2>
              <div class="btn btn-warning" style={{ color: " white" }}>
                Video Link
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Details;
