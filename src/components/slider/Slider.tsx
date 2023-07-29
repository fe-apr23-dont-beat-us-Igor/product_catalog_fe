import './index.scss';
import { FC } from 'react';
import { sliderData } from '../../data/slider';
import { SliderProvider, useSliderContext } from './SliderContext';

const SliderContent: FC = () => {
  const {
    slides,
    currentSlide,
    changeSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
  } = useSliderContext();

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
          {slides.map((slide) => (
            <div
              key={slide}
              className="slider__slide"
              style={{
                backgroundColor: slide,
                transform: `translateX(-${currentSlide * 100}%)`,
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
        {slides.map((slide, index) => (
          <button
            key={slide}
            className={`slider__dot ${
              index === currentSlide ? 'slider__dot--active' : ''
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
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
