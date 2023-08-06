import classNames from 'classnames';
import { useSlider } from '../../hooks/useSlider';

import { img } from '../../images/images';
import banner from '../../images/photos/Banner.png';
import SliderButton from '../UI/SliderButton';
import { url } from 'inspector';

const slideList = ['black', 'blue', 'green', 'blue', 'yellow'];

const Slider = () => {
  const {
    slideListRef,
    slides,
    currentSlide,
    changeSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
  } = useSlider<string>(slideList, true, 1);

  const dotClassList = (index: number) =>
    classNames('slider__dot', {
      'slider__dot--active': currentSlide === index,
    });

  return (
    <div className="slider">
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
            {slides.map((color) => (
              <div
                className="slider__slide"
                style={{
                  backgroundImage: `url(${banner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* <img src={img.banner} alt="" /> */}
              </div>
            ))}
          </div>
        </div>

        {/* slides */}
        {/* button */}
        <button
          className="slider__button slider__button--right"
          onClick={() => changeSlide(1)}
        ></button>
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
