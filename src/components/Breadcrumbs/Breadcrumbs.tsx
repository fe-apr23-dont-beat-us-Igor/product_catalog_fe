import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { img } from "../../images/images";
import classNames from "classnames";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path !== '');
  const searchParams = location.search;


  const getCategory = (pathname: string): string => {
    if (pathname.includes('favourites')) {

      return 'FAVOURITES';
    } else if (pathname.includes('cart')) {

      return 'CART';
    }
    if (searchParams.includes('tablets')) {

      return 'TABLETS';
    } else if (searchParams.includes('accessories')) {

      return 'ACCESSORIES';
    } else if (pathname.includes('contacts')) {

      return 'CONTACTS';
    }
    return 'PHONES';
  };

  const getItemCategory = (path: string): string => {
    if (path.includes('ipad')) {
      return 'TABLETS';
    } else if (path.includes('watch')) {
      return 'ACCESSORIES';
    }
    return 'PHONES';
  };

  const getItemLink = (path: string): string => {
    if (path.includes('ipad')) {
      return '?category=tablets&page=1';
    } else if (path.includes('watch')) {
      return '?category=accessories&page=1';
    }
    return '?category=phones&page=1';
  };

  const makeFirstCapitale = (inpString: string) => {
    if (inpString.length < 2) {
      return inpString;
    }

    return inpString.slice(0, 1).toUpperCase() + inpString.slice(1);
  };

  const isBreadcrumbsVisible = location.pathname !== '/'
    && location.pathname !== '/home'
    && location.pathname !== '/registration'
    && location.pathname !== '/authorization';

  return (
    <ul className={classNames('breadcrumbs section container ', {
      'breadcrumbs--visible': isBreadcrumbsVisible,
    })}>
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
        const breadcrumbsItem = paths.length === 1
          ? (
            <li key={index} className="breadcrumbs__item">
              {separator}
              <span className="breadcrumbs__item--title">
                {getCategory(paths[0])}
              </span>
            </li>
          ) : (
            index === paths.length - 1 ? (
              <li key={index} className="breadcrumbs__item">
                {separator}
                <span className="breadcrumbs__item--title">
                  {path.split('-')
                    .map(titleWord => makeFirstCapitale(titleWord)).join(' ')
                  }
                </span>
              </li>
            ) : (
              <li key={index} className="breadcrumbs__item">
                {separator}
                <Link
                  to={`/products${getItemLink(paths[1])}`}
                  className="breadcrumbs__item--link"
                >
                  {getItemCategory(paths[1])}
                </Link>
              </li>
            ));

        return breadcrumbsItem;
      })}
    </ul>
  );
};

