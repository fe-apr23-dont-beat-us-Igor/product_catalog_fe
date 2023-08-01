import React, { FC } from 'react';
import { useSliderContext } from './SliderContext';

type Props = {
  index: number;
};

const Dot: FC<Props> = ({ index }) => {
  const { goToSlide, currentSlide } = useSliderContext();

  const isActive = index === currentSlide;

  return (
    <button
      className={`slider__dot ${isActive && 'slider__dot--active'}`}
      onClick={() => goToSlide(index)}
    ></button>
  );
};

export default Dot;
