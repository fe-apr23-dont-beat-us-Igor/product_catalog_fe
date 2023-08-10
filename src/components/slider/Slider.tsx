import classNames from 'classnames';
import { useSlider } from '../../hooks/useSlider';

import banner from '../../images/photos/Banner.png';
import SliderButton from '../UI/SliderButton';
import { SlideList } from './SlideList';

const Slider = () => {
  const arrConfig = new Array(5).fill('0');

  const {
    slideListRef,
    slides,
    currentSlide,
    changeSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
  } = useSlider<string>(arrConfig, true, 1);

  const dotClassList = (index: number) =>
    classNames('slider__dot', {
      'slider__dot--active': currentSlide === index,
    });

  return (
    <div
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="600"
      className="slider"
    >
      <div className="slider__body">
        {/* button */}
        <button
          className="slider__button slider__button--left"
          onClick={() => changeSlide(-1)}
        ></button>
        {/* button */}
        {/* slides */}

        <div
          className="slider__slides-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="slider__slides" ref={slideListRef}>
            <SlideList />
          </div>
        </div>

        {/* slides */}
        {/* button */}
        <button
          className="slider__button slider__button--right"
          onClick={() => changeSlide(1)}
        >
        </button>
        {/* button */}
      </div>

      <div className="slider__dots">
        {slides.map((slide, index) => (
          <button
            className={dotClassList(index)}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
