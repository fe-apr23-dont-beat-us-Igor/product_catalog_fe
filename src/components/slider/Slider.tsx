import { useSlider } from '../../hooks/useSlider';

import { img } from '../../images/images';

const slideList = ['1', '2', '3', '4', '5'];

const Slider = () => {
  const {
    slides,
    currentSlide,
    changeSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
  } = useSlider<string>(slideList, true);

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="slider__body">
        <button
          className="slider__button slider__button--left"
          onClick={() => changeSlide(-1)}
        ></button>

        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              className="slider__slide"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              <img src={img.banner} alt="" />
            </div>
          ))}
        </div>

        <button
          className="slider__button slider__button--right"
          onClick={() => changeSlide(1)}
        ></button>
      </div>

      <div className="slider__dots">
        {slides.map((slide, index) => (
          <button
          className={`slider__dot ${currentSlide === index && 'slider__dot--active'}`}
          onClick={() => goToSlide(index)}
        ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
