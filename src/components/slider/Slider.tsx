import { FC, useEffect, useState } from 'react';
import './index.css';

import { sliderData } from '../../data/slider';

// import Banner from '../../../public/ui/Banner.png';
const mockSlide = ['ui/Banner.png', 'ui/Banner.png', 'ui/Banner.png'];

const Slider: FC = () => {
  const [items, setItems] = useState<string[]>(mockSlide);
  const [slide, setSlide] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  const changeSlide = (direction: number = 1): void => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number: number): void => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (event: any): void => {
    const touchDown = event.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTochMove = (event: any): void => {
    if (!touchPosition) return;

    const currentPosition = event.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    let interval: any = setInterval(() => changeSlide(1), 5000);

    return () => clearInterval(interval);
  }, [items.length, slide, autoPlay]);

  return (
    <div className="slider">
      <button
        className="slider__button slider__button--prev"
        onClick={() => changeSlide(-1)}
      >
        <img src="ui/arrowLeft.svg" alt="" />
      </button>
      <div className="slider__content">
        {/* <img src='ui/Banner.png' alt="" /> */}
        {items.map(slide => (
            <div 
                className='slider__slide' 
            >
                <img className='slide__img' src={slide} alt="" />
            </div>
        ))}
      </div>
      <button
        className="slider__button slider__button--next"
        onClick={() => changeSlide(1)}
      >
        <img src={sliderData.arrowRight} alt="" />
      </button>
    </div>
  );
};

export default Slider;
