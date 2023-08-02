import React, { FC } from 'react';
import { useSearchParams, Link, useParams } from 'react-router-dom';
import { visiblePageLinks } from '../utils/visiblePageLinks';
import { getNewSearchParams } from '../utils/getNewSearchParams';
import './Pagination.scss';
import SliderButton from '../UI/SliderButton';
import PaginationButton from '../UI/PaginationButton';

type Props = {
  count: number;
};

const Pagination: FC<Props> = ({ count }) => {
  const buttons = new Array(count).fill(0);

  return (
    <div className="pagination">
      <SliderButton left={true} />
      <div className="pagination__buttons">
        {buttons.map((_, index) => (
          <PaginationButton pageNumber={index + 1} selected={false} />
        ))}
      </div>
      <SliderButton left={false} />
    </div>
  );
};

export default Pagination;
