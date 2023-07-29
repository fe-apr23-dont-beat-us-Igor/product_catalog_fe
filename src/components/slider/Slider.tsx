import './index.scss';
import { FC } from 'react';
import { sliderData } from '../../data/slider';
import { SliderProvider, useSliderContext } from './SliderContext';
import DotList from './DotList';
import SliderButton from './SliderButton';
import Slide from './Slide';
import SlideList from './SlideList';

const SliderContent: FC = () => {
  const {
    handleTouchStart,
    handleTouchMove,
  } = useSliderContext();
  
  console.log('render')
  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="slider__body">
        <SliderButton icon={sliderData.arrowLeft} step={-1} />
          <SlideList />
        <SliderButton icon={sliderData.arrowRight} step={1} />
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
