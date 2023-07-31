import { FC } from 'react';
import { Card } from '../Card';
import { Phone } from '../Catalog/Catalog';

const mockCard = [1, 2, 3, 4];

const phone: Phone = {
  age: 1,
  type: 'string',
  id: 'string',
  imageUrl: 'string',
  name: 'string',
  snippet: 'string',
  price: 1,
  discount: 1,
  screen: 'string',
  capacity: 'string',
  ram: 'string',
};

const GoodsSliderCollection: FC = () => {
  return (
    <section className="section container goodsSliderCollection">
      <div className="goodsSliderCollection__head">
        <h2>Brand new models</h2>
        <div className="goodsSliderCollection__buttons">
          <div className="sliderButton sliderButton--left"></div>
          <div className="sliderButton"></div>
        </div>
      </div>
      <div className="goodsSliderCollection__content">
        {mockCard.map(() => (
          <Card phone={phone} />
        ))}
      </div>
    </section>
  );
};

export default GoodsSliderCollection;
