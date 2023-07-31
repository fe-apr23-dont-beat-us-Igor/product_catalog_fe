import { FC } from 'react';
import { useSliderContext } from './SliderContext';
import { img } from '../../images/images';

type Props = {
  slide: string;
};

const Slide: FC<Props> = ({ slide }) => {
  const { currentSlide } = useSliderContext();

  return (
    <div
      className="slider__slide"
      style={{
        // backgroundColor: slide,
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    >
      <img src={img.banner} alt="" />
    </div>
  );
};

export default Slide;
