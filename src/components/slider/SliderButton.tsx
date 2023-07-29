import { FC } from 'react';
import { useSliderContext } from './SliderContext';

type Props = {
  icon: string;
  step: number
};

const SliderButton: FC<Props> = ({ icon, step}) => {
  const { changeSlide } = useSliderContext();

  return (
    <button
      className="slider__button"
      onClick={() => changeSlide(step)}
    >
      <img src={icon} alt="" />
    </button>
  );
};

export default SliderButton;
