import classNames from 'classnames';
import { FC, ButtonHTMLAttributes } from 'react';
import { SearchLink } from '../SearchLink';
import { useLocation, useParams } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // implement your logic in parent component
  pageNumber: number;
  selected: boolean;
}

const PaginationButton: FC<Props> = ({
  pageNumber,
  selected,
  ...atributes
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');

  const select = page === String(pageNumber);

  const className = classNames('paginationButton ', {
    'paginationButton--selected': select,
  });

  return (
    <SearchLink params={{ page: `${pageNumber}` }}>
      <button className={className} {...atributes}>
        <p className="text">{pageNumber}</p>
      </button>
    </SearchLink>
  );
};

export default PaginationButton;
