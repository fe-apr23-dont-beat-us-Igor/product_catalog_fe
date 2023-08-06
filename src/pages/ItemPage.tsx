import { FC } from 'react';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import ItemAbout from '../components/Item/ItemAbout';
import ItemTechSpecs from '../components/Item/ItemTechSpecs';
import ItemCartInfo from '../components/Item/ItemCartInfo';
import ItemGallery from '../components/Item/ItemGallery';
import { getNewProducts } from '../api/api';
import { useProductsAPI } from '../hooks/useFetch';
import { ProductCollection } from '../Types/products.types';

const ItemPage: FC = () => {
  const [newProducts, loading, error] = useProductsAPI<ProductCollection>(
    {},
    getNewProducts,
  );
  return (
    <main className="item">
      <h2 className="item__name">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>
      <div className="item__content">
        <div className="item__gallery container section">
          <ItemGallery />
        </div>
        <div className="item__cart-info container section">
          <ItemCartInfo />
        </div>
        <div className="item__about container section">
          <ItemAbout />
        </div>
        <div className="item__tech container section">
          <ItemTechSpecs />
        </div>
      </div>

      {newProducts && <GoodsSliderCollection products={newProducts.rows} />}
    </main>
  );
};

export default ItemPage;
