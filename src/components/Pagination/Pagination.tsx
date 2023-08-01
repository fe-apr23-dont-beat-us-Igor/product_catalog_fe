import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { visiblePageLinks } from '../utils/visiblePageLinks';
import { getNewSearchParams } from '../utils/getNewSearchParams';
import './Pagination.scss';
import PuginationButton from '../UI/PuginationButton';
import SliderButton from '../UI/SliderButton';

type Props = {
  total: number;
};

const Pagination = () => {
  return (
    <div className="pagination">
      <SliderButton left={true} />
      <div className="pagination__buttons">
        <PuginationButton pageNumber={1} selected={true} />
        <PuginationButton pageNumber={2} selected={false} />
        <PuginationButton pageNumber={3} selected={false} />
        <PuginationButton pageNumber={4} selected={false} />
      </div>
      <SliderButton left={false} />
    </div>
  );
};

export default Pagination;
