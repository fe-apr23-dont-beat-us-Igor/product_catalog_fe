import { TouchEventHandler, useEffect, useRef, useState } from 'react';

export const useSlider = <T>(
  slideList: T[],
  autoPlay = true,
  itemsPerSlide: number,
  offset: number = 0,
) => {
  const [slides] = useState<T[]>(slideList);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<null | number>(null);
  const slideListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!autoPlay) {
      interval = setInterval(() => changeSlide(1), 5000);
    }

    return () => clearInterval(interval);
  }, [slides, currentSlide, autoPlay]);

  const moveSlider = () => {
    if (slideListRef.current) {
      const translateValue =
        (slideListRef.current?.clientWidth * currentSlide) / itemsPerSlide +
        offset;

      return {
        transform: `translateX(-${translateValue}px)`,
      };
    }
  };

  useEffect(() => {
    if (slideListRef.current) {
      Object.assign(slideListRef.current.style, moveSlider());
    }
  }, [slideListRef, currentSlide]);

  const changeSlide = (direction: number = 1): void => {
    let slideNumber = (currentSlide + direction) % slides.length;

    if (slideNumber < 0) {
      slideNumber = slides.length - 1;
    }

    setCurrentSlide(slideNumber);
  };

  const goToSlide = (number: number): void => {
    setCurrentSlide(number % slides.length);
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event): void => {
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

  return {
    slideListRef,
    slides,
    currentSlide,
    changeSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
  };
};
