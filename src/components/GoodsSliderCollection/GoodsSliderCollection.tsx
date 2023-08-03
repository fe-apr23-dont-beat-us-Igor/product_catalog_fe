import { FC } from 'react';
import { Phone } from '../Catalog/Catalog';
import Card from '../Card/Card';
import SliderButton from '../UI/SliderButton';
import { useSlider } from '../../hooks/useSlider';

const mockCard = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

const phone: Phone = {
  age: 1,
  type: 'string',
  id: 'string',
  imageUrl: 'string',
  name: 'string',
  snippet: 'string',
  priceRegular: 1,
  priceDiscount: 1,
  screen: 'string',
  capacity: 'string',
  ram: 'string',
};

const GoodsSliderCollection: FC = () => {
  const {
    slides,
    currentSlide,
    changeSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
  } = useSlider(mockCard, true);

  return (
    <section className="section container goodsSliderCollection">
      <div className="goodsSliderCollection__head">
        <h2>Brand new models</h2>
        <div className="goodsSliderCollection__buttons">
          <SliderButton left={true} onClick={() => changeSlide(-1)} />
          <SliderButton left={false} onClick={() => changeSlide(1)} />
        </div>
      </div>
      <div className="goodsSliderCollection__content">
        {slides.map(() => (
          <div
            style={{
              minWidth: '24%',
              transform: `translateX(-${(currentSlide * 100)}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
            className=""
          >
            <Card phone={phone} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoodsSliderCollection;
