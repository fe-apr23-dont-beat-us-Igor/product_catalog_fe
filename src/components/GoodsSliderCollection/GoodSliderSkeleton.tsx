import React from 'react';
import SliderButton from '../UI/SliderButton';
import SkeletonCard from '../Card/SkeletonCard';

export const GoodSliderSkeleton = () => {
  return (
    <section className="section container goodsSliderCollection">
      <div className="goodsSliderCollection__head">
        <div className="card__name skeleton__name"></div>
        <div className="goodsSliderCollection__buttons">
          <SliderButton left={true} onClick={() => {}} />
          <SliderButton left={false} onClick={() => {}} />
        </div>
      </div>
      <div className="goodsSliderCollection__slides-container">
        <div className="goodsSliderCollection__slides" style={{ gap: '16px' }}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </section>
  );
};
