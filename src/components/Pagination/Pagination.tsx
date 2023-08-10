import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { visiblePageLinks } from '../utils/visiblePageLinks';
import { getNewSearchParams } from '../utils/getNewSearchParams';
import SliderButton from '../UI/SliderButton';
import PaginationButton from '../UI/PaginationButton';
import { SearchLink } from '../SearchLink';

type Props = {
  count: number;
};

const Pagination: FC<Props> = ({ count }) => {
  const buttons = new Array(count).fill(0);

  const getCurrentPage = (): number => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = Number(searchParams.get('page'));

    return page;
  };

  const goNextPage = (): string => {
    const currentPage = getCurrentPage();

    console.log(currentPage);

    const nextPage =
      currentPage < buttons.length ? currentPage + 1 : currentPage;

    return String(nextPage);
  };
  const goPrevPage = (): string => {
    const currentPage = getCurrentPage();

    const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;

    return String(prevPage);
  };

  console.log(goNextPage());

  return (
    <div className="pagination">
      <SearchLink
        params={{ page: goPrevPage() }}
        className="sliderButton sliderButton--left"
      ></SearchLink>
      {/* <SliderButton left={true} /> */}
      <div className="pagination__buttons">
        {buttons.map((_, index) => (
          <PaginationButton pageNumber={index + 1} />
        ))}
      </div>
      <SearchLink
        params={{ page: goNextPage() }}
        className="sliderButton"
      ></SearchLink>
    </div>
  );
};

export default Pagination;
