import { FC } from 'react';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import Categories from '../components/Categories/Categories';
import { useProductsAPI } from '../hooks/useFetch';
import { Product, ProductCollection } from '../Types/products.types';
import { getDiscountProducts, getNewProducts } from '../api/api';
import Slider from '../components/Slider/Slider';
import { SearchParams } from '../servises/searchParam.servise';

const Home: FC = () => {
  const [newProducts, loadingNew, errorNew] = useProductsAPI<ProductCollection>(
    {},
    getNewProducts,
  );

  const [discountProducts, loadingDiscount, errorDiscount] =
    useProductsAPI<ProductCollection>({}, getDiscountProducts);

  console.log(newProducts);

  return (
    <main className="">
      <h1 className="header-margin section container">
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
