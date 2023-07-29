import React from 'react';
import { useSliderContext } from './SliderContext';
import Dot from './Dot';

const DotList = () => {
  const { slides } = useSliderContext();

  return (
    <div className="slider__dots">
      {slides.map((slide, index) => (
        <Dot key={slide} index={index} />
      ))}
    </div>
  );
};

export default DotList;
