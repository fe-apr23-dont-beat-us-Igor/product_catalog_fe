import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { visiblePageLinks } from '../utils/visiblePageLinks';
import { getNewSearchParams } from '../utils/getNewSearchParams';
import './Pagination.scss';

type Props = {
  total: number,
};

export const Pagination: React.FC<Props> = ({ total }) => {
  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || null;
  const page = searchParams.get('page') || '1';
  const numberOfPages = Math.ceil(total / (Number(perPage) || total));
 
  const linkToChange = (page: string | null) => {
    return {
      search: getNewSearchParams (searchParams, { 
        page, 
      }),
    };
  };

  return numberOfPages > 1 ? (
      <div className="pagination__container">
        <div className="pagination__item">
          <Link 
            to={linkToChange(+page === 1 
              ? null 
              : `${+page - 1}`)}
            className={page === '1' 
              ? "arrow__left__disabled" 
              : "arrow__left" }
          />
        </div>
        
        <ul className="pagination">
          {visiblePageLinks(numberOfPages, page).map((pageLink) => (
            <li className="pagination__item">
              <Link 
                to={linkToChange(pageLink === 1 
                  ? null 
                  : pageLink.toString())}
                className={+page === pageLink 
                  ? "page__link__selected"
                  : "page__link"}
              >
                {pageLink}
              </Link>
             </li>  
          ))}
          
        </ul>

        <div className="pagination__item">
        <Link 
            to={linkToChange(+page === numberOfPages 
              ? page 
              : `${+page + 1}`)}
            className={+page === numberOfPages
              ? "arrow__right__disabled" 
              : "arrow__right" }
          />
        </div>
    </div>
  ) : null;
};