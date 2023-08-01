import { FC } from 'react';
import { useSliderContext } from './SliderContext';
import classNames from 'classnames';

type Props = {
  step: number
};

const SliderButton: FC<Props> = ({ step }) => {
  const { changeSlide } = useSliderContext();

  return (
    <button
      className={classNames("slider__button slider__button--left" , {
        'slider__button--left': step < 0,
        'slider__button--right': step > 0
      })}
      onClick={() => changeSlide(step)}
    >
    </button>
  );
};

export default SliderButton;
