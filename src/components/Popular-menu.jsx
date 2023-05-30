import React from "react";
import { Link } from "react-router-dom";

function PopularMenu(props) {
  const { title, image } = props;
  return (
    <>
      <div className="col-md-4 col-xs-12 col-sm-12 mb-4">
        <Link to={`/details/${title?.toLowerCase()?.split(" ").join("-")}`}>
          <div
            className="menu-background "
            img-
            style={{
              backgroundImage: `url(/img/${image})`,
            }}
          >
            <h3 className="popular-menu-list ">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PopularMenu;
