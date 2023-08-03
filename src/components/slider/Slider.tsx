import { FC } from 'react';
import { SliderProvider, useSliderContext } from './SliderContext';
import DotList from './DotList';
import SliderButton1 from './SliderButton';
import SlideList from './SlideList';


// console.log(logo);

const SliderContent: FC = () => {
  const { handleTouchStart, handleTouchMove } = useSliderContext();

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="slider__body">
        <SliderButton1 step={-1} />
        <SlideList />
        <SliderButton1 step={1} />
      </div>

      <DotList />
    </div>
  );
};

export const Slider: FC = () => {
  return (
    <SliderProvider>
      <SliderContent />
    </SliderProvider>
  );
};

export default Slider;
