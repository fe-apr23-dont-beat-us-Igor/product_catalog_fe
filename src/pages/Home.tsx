import { FC } from 'react';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import Categories from '../components/Categories/Categories';

import Slider from '../components/slider/Slider';
import { useProductsAPI } from '../hooks/useFetch';
import { Product, ProductCollection } from '../Types/products.types';
import { getNewProducts } from '../api/api';

const Home: FC = () => {
  const [newProducts, loading, error] = useProductsAPI<ProductCollection>(
    {},
    getNewProducts,
  );

  console.log(newProducts);

  return (
    <main className="">
      <h1 className="header-margin section container">
        Welcome to Nice Gadgets store!
      </h1>
      <Slider />
      {newProducts && <GoodsSliderCollection products={[...newProducts.rows, ...newProducts.rows]} />}
      <Categories />
      {newProducts && <GoodsSliderCollection products={newProducts.rows} />}
    </main>
  );
};

export default Home;
