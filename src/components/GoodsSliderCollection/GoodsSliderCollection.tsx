import React, { FC } from 'react';
import Card from '../Card/Card';
import SliderButton from '../UI/SliderButton';
import { useSlider } from '../../hooks/useSlider';
import { Product, ProductCollection } from '../../Types/products.types';

// const mockCard = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

// const phone: Product = {
//   id: 220,
//   itemId: 'apple-iphone-11-128gb-black',
//   category: 'phones',
//   name: 'Apple iPhone 11 128GB Black',
//   capacity: '128GB',
//   fullPrice: 1100,
//   color: 'black',
//   price: 1050,
//   description:
//     'IPhone 11, 11 Pro and 11 Pro Max. Released on Sept. 20, 2019, the iPhone 11, 11 Pro and 11 Pro Max are the successors to the iPhone XR, XS and XS Max, respectively. One major advancement of the iPhone 11 series of smartphones is the inclusion of a Wi-Fi 6 wireless chip for improved speeds using the IEEE 802.11ax Wi-Fi 6 standard. Another advantage is the infusion of an upgraded 12-megapixel TrueDepth front camera.The iPhone 11 continued the use of the slightly lower quality 6.1-inch LCD display found in the iPhone XR. However, many iPhone 11 enhancements were made over the XR, including an upgraded A13 Bionic chip, a rear camera with 2x optical zoom and ultra-wide lens, improved battery life, improved water resistance and a 256 GB storage capacity option.The iPhone 11 Pro also makes significant strides over the iPhone XS. Perhaps the most famous is the three-lens rear-facing camera that Apple put into iPhones for the first time. Other advantages over the XS model include an upgraded A13 Bionic chip, Super Retina XDR display, ultra-wide-angle photo capabilities and up to 4x optical zoom, four additional hours of battery life and improved water resistance up to 4 meters for 30 minutes.',
//   screen: "6.1' IPS",
//   ram: '4GB',
//   year: 2019,
//   image_catalog: 'iphone11black128gb.jpg',
//   image_id: 38,
// };

type Props = {
  products: Product[];
};

const GoodsSliderCollection: FC<Props> = ({ products = [] }) => {
  const {
    slideListRef,
    slides,
    currentSlide,
    changeSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
  } = useSlider(products, false, products.length, 16);

  return (
    <section className="section container goodsSliderCollection">
      <div className="goodsSliderCollection__head">
        <h2>Brand new models</h2>
        <div className="goodsSliderCollection__buttons">
          <SliderButton left={true} onClick={() => changeSlide(-1)} />
          <SliderButton left={false} onClick={() => changeSlide(1)} />
        </div>
      </div>
      <div className="goodsSliderCollection__slides-container">
        <div
          className="goodsSliderCollection__slides"
          ref={slideListRef}
        >
          {slides.map((slide) => (
            <div className="goodsSliderCollection__slide">
              <Card phone={slide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodsSliderCollection;
