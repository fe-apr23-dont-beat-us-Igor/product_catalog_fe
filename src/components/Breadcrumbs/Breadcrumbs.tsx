import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { img } from "../../images/images";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="breadscrumbs">
      <Link to="/home">
        <img
          src={img.home}
          alt="home-icon"
          className="breadcrumbs__home-icon"
        />
      </Link>
      <img
        src={img.arrowRight}
        alt="arrow-icon"
        className="breadcrumbs__arrow"
      />
      <Link to="/phones">
        <span className="breadcrumbs__text">Phones</span>
      </Link>
    </div>
  );
};