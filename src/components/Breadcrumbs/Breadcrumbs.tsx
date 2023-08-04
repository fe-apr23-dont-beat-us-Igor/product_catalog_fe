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
    <div className="breadscrumbs">
      <Link to="/home">
        <img
          src={img.home}
          alt="home-icon"
          className="breadcrumbs__home-icon"
        />
      </Link>
      {paths.length >= 1 &&
        <img
          src={img.arrowRight}
          alt="arrow-icon"
          className="breadcrumbs__arrow"
        />
      }
      {paths.length === 1
        ? (<p>
          {secondLinkTitle}
        </p>
        ) : (
          <Link to={'/products' + searchParams}>
            {secondLinkTitle}
          </Link>
        )}
    </div >
  );
};