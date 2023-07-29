import {
  createContext,
  FC,
  useState,
  useEffect,
  useContext,
  TouchEventHandler,
} from 'react';

interface Context {
  slides: string[];
  currentSlide: number;
  changeSlide: (value: number) => void;
  goToSlide: (value: number) => void;
  handleTouchStart: TouchEventHandler<HTMLDivElement>
  handleTouchMove: TouchEventHandler<HTMLDivElement>
}

const initialContext: Context = {
  slides: [],
  currentSlide: 0,
  changeSlide: () => {},
  goToSlide: () => {},
  handleTouchStart: () => {},
  handleTouchMove: () => {},
};

const SliderContext = createContext<Context>(initialContext);

type Props = {
  children: React.ReactNode;
};

const mockSlides = ['red', 'green', 'blue', 'black', 'orange', 'red'];

export const SliderProvider: FC<Props> = ({ children }) => {
  const [slides] = useState<string[]>(mockSlides);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<null | number>(null);
  const [autoPlay] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => changeSlide(1), 5000);
    }

    return () => clearInterval(interval);
  }, [slides, currentSlide, autoPlay]);

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

  return (
    <SliderContext.Provider
      value={{
        slides,
        currentSlide,
        changeSlide,
        goToSlide,
        handleTouchStart,
        handleTouchMove
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => useContext(SliderContext);
