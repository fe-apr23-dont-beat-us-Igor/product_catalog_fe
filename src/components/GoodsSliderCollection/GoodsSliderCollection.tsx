import { FC } from 'react';
import { Phone } from '../Catalog/Catalog';
import Card from '../Card/Card';
import SliderButton from '../UI/SliderButton';

const mockCard = [1, 2, 3, 4];

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
  return (
    <section className="section container goodsSliderCollection">
      <div className="goodsSliderCollection__head">
        <h2>Brand new models</h2>
        <div className="goodsSliderCollection__buttons">
          <SliderButton left={true} />
          <SliderButton left={false} />
        </div>
      </div>
      <div className="goodsSliderCollection__content">
        {mockCard.map(() => (
          <Card 
            phone={phone}
          />
        ))}
      </div>
    </section>
  );
};

export default GoodsSliderCollection;
