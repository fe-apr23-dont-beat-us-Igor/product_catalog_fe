import { FC, useEffect } from 'react';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import Categories from '../components/Categories/Categories';
import Slider from '../components/Slider/Slider';
import { useProductsAPI } from '../hooks/useFetch';
import { Product, ProductCollection } from '../Types/products.types';
import { getDiscountProducts, getNewProducts } from '../api/api';
import { SearchParams, getSearchWith } from '../servises/searchParam.servise';
import { GoodSliderSkeleton } from '../components/GoodsSliderCollection/GoodSliderSkeleton';
import '../styles/components/home.scss';
import '../styles/components/animation.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from '../components/Slider/Slider';

const Home: FC = () => {
  const [newProducts, loadingNew, errorNew] = useProductsAPI<
    ProductCollection,
    string
  >(getSearchWith({ limit: '16' }), getNewProducts);

  const [discountProducts, loadingDiscount, errorDiscount] = useProductsAPI<
    ProductCollection,
    string
  >(getSearchWith({ limit: '16' }), getDiscountProducts);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="Home">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600"
        className="header-margin section container"
      >
        Welcome to Nice Gadgets store!
      </h1>
      <Slider />
      {loadingNew && <GoodSliderSkeleton />}
      {newProducts && (
        <GoodsSliderCollection
          products={[...newProducts.rows, ...newProducts.rows]}
          title="Brand new models"
        />
      )}

      <Categories />

      {loadingDiscount && <GoodSliderSkeleton />}
      {discountProducts && (
        <GoodsSliderCollection
          products={discountProducts.rows}
          title="Hot prices"
        />
      )}
    </main>
  );
};

export default Home;
