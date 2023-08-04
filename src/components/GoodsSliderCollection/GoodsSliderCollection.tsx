import React, { FC } from 'react';
import { Phone } from '../Catalog/Catalog';
import Card from '../Card/Card';
import SliderButton from '../UI/SliderButton';
import { useSlider } from '../../hooks/useSlider';
import { useProducts } from '../../hooks/useFetch';
import { ProductCollection } from '../Catalog/Catalog_Types';

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

  const [products, loading, error] = useProducts<ProductCollection>(16, 1);

  console.log(products);

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="section container goodsSliderCollection"
    >
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
              display: 'inline',
              // minWidth: '24%',
              transform: `translateX(calc(-${currentSlide} * (100% + 16px)))`,
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
