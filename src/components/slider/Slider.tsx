import { FC, TouchEventHandler, useEffect, useState } from 'react';
import './index.scss';

import { sliderData } from '../../data/slider';
import Dot from './Dot';

const mockSlide = ['red', 'green', 'blue', 'black', 'orange', 'red'];

const Slider: FC = () => {
  const [items] = useState<string[]>(mockSlide);
  const [slide, setSlide] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [autoPlay] = useState<boolean>(true);

  const changeSlide = (direction: number = 1): void => {
    let slideNumber = (slide + direction) % items.length;

    if (slideNumber < 0) {
      slideNumber = items.length - 1;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number: number): void => {
    setSlide(number % items.length);
  };

  const handleTouchStart :TouchEventHandler<HTMLDivElement> = (event): void => {
    const touchDown = event.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (event): void => {
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
    let interval: any;

    if (autoPlay) {
      interval = setInterval(() => changeSlide(1), 5000);
    }

    return () => clearInterval(interval);
  }, [items.length, slide, autoPlay]);

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="slider__body">
        <button
          className="slider__button slider__button--prev"
          onClick={() => changeSlide(-1)}
        >
          <img src="ui/arrowLeft.svg" alt="" />
        </button>

        <div className="slider__slides">
          {items.map((color) => (
            <div
              key={color}
              className="slider__slide"
              style={{
                backgroundColor: color,
                transform: `translateX(-${slide * 100}%)`,
              }}
            ></div>
          ))}
        </div>

        <button
          className="slider__button slider__button--next"
          onClick={() => changeSlide(1)}
        >
          <img src={sliderData.arrowRight} alt="" />
        </button>
      </div>

      <div className="slider__dots">
        {items.map((item, index) => (
          <button
            key={item}
            className={`slider__dot ${
              index === slide ? 'slider__dot--active' : ''
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
