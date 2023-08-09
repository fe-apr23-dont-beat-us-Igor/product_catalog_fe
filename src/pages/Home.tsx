import { FC } from 'react';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import Categories from '../components/Categories/Categories';
import Slider from '../components/Slider/Slider';
import { useProductsAPI } from '../hooks/useFetch';
import { Product, ProductCollection } from '../Types/products.types';
import { getDiscountProducts, getNewProducts } from '../api/api';
import { SearchParams, getSearchWith } from '../servises/searchParam.servise';
import '../styles/components/home.scss';
import '../styles/components/animations.scss';

const Home: FC = () => {
  const [newProducts, loadingNew, errorNew] = useProductsAPI<ProductCollection, string>(
    getSearchWith({ limit: '16' }),
    getNewProducts,
  );

  const [discountProducts, loadingDiscount, errorDiscount] =
    useProductsAPI<ProductCollection, string>(
      getSearchWith({ limit: '16' }),
      getDiscountProducts,
    );

  return (
    <main className="">
      <h1 className="header-margin home-title section container">
        Welcome to Nice Gadgets store!
      </h1>
      <Slider />
      {newProducts && (
        <GoodsSliderCollection
          products={[...newProducts.rows, ...newProducts.rows]}
          title="Brand new models"
        />
      )}
      <Categories />
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
