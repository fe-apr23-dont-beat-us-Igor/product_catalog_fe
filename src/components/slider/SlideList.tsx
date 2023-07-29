import React from 'react';
import { useSliderContext } from './SliderContext';
import Slide from './Slide';

const SlideList = () => {
  const { slides } = useSliderContext();
  return (
    <div className="slider__slides">
      {slides.map((slide) => (
        <Slide key={slide} slide={slide} />
      ))}
    </div>
  );
};

export default SlideList;
