import { FC } from 'react';
import Dot from './Dot';
import { useSliderContext } from './SliderContext';

type Props = {
  slide: string;
};

const Slide: FC<Props> = ({ slide }) => {
  const { currentSlide } = useSliderContext();

  return (
    <div
      className="slider__slide"
      style={{
        backgroundColor: slide,
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    ></div>
  );
};

export default Slide;
