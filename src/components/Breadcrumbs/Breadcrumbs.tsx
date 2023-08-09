import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { img } from "../../images/images";
import classNames from "classnames";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path !== '');
  const searchParams = location.search.toString() || '';
  
  const makeFirstCapitale = (inpString: string) => {
    if (inpString.length < 2) {
      return inpString;
    }

    return inpString.slice(0, 1).toUpperCase() + inpString.slice(1);
  };

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
  const isBreadcrumbsVisible = location.pathname !== '/'
    && location.pathname !== '/home'
    && location.pathname !== '/registration';

  return (
    <ul className={classNames('breadcrumbs', {
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
        if (index === paths.length - 1) {
          return (
            <li key={index} className="breadcrumbs__item">
              {separator}
              <span className="breadcrumbs__item--title">
                {index === 1
                  ? (path.split('-')
                  .map(titleWord => makeFirstCapitale(titleWord)).join(' '))
                  : (secondLinkTitle)
                }
              </span>
            </li>
          );
        }

          return (
            <li key={index} className="breadcrumbs__item">
              {separator}
              <Link
                to={'/products' + searchParams}
                className="breadcrumbs__item--link"
              >
                {secondLinkTitle}
              </Link>
            </li>
          );
      })}
    </ul>
  );
};