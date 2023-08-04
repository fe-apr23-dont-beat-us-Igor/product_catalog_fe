import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { img } from "../../images/images";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path !== '');
  const searchParams = location.search.toString() || '';
  console.log(location, paths, location.search);

  let secondLinkTitle = '';
  switch (searchParams) {
    case '?category=tablets':
      secondLinkTitle = 'TABLETS';
      break;

    case '?category=accessories':
      secondLinkTitle = 'ACCESSORIES';
      break;

    default:
      secondLinkTitle = 'PHONES';
  };

  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <Link to="/home">
          <img
            src={img.home}
            alt="home-icon"
            className="breadcrumbs__home-icon"
          />
        </Link>
      </li>
      {paths.map((path, index) => {
        const separator = (
          <img
            src={img.arrowRight}
            alt="arrow-icon"
            className="breadcrumbs__arrow"
          />
        );
        if (index === paths.length - 1) {
          return (
            <li key={index} className="breadcrumbs__item">
              {separator}
              <span>
                {path}
              </span>
            </li>
          );
        }

          return (
            <li key={index} className="breadcrumbs__item">
              {separator}
              <Link to={'/products' + searchParams}>
                {secondLinkTitle}
              </Link>
            </li>
          );
      })}
    </ul>
  );
};