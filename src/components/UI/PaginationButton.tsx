import classNames from 'classnames';
import { FC, ButtonHTMLAttributes } from 'react';
import { SearchLink } from '../SearchLink';
import { useLocation, useParams } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  pageNumber: number;
}

const PaginationButton: FC<Props> = ({ pageNumber, ...atributes }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');

  const select = page === String(pageNumber) || (!page && pageNumber === 1);

  const className = classNames('paginationButton ', {
    'paginationButton--selected': select,
  });

  return (
    <SearchLink className={className} params={{ page: `${pageNumber}` }}>
      <button className={className} {...atributes} disabled={select}>
        <p className="text">{pageNumber}</p>
      </button>
    </SearchLink>
  );
};

export default PaginationButton;
