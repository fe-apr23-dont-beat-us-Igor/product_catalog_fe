import { FC, useState, useEffect } from 'react';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import ItemAbout from '../components/Item/ItemAbout';
import ItemTechSpecs from '../components/Item/ItemTechSpecs';
import ItemCartInfo from '../components/Item/ItemCartInfo';
import ItemGallery from '../components/Item/ItemGallery';
import { getNewProducts, getProductsById } from '../api/api';
import { useProductsAPI } from '../hooks/useFetch';
import {
  FullProductInformation,
  Product,
  ProductCollection,
} from '../Types/products.types';
import { useLocation, useParams } from 'react-router-dom';
import SkeletonItemGallery from '../components/Item/SkeletonItemGallery';
import SkeletonItemCartInfo from '../components/Item/SkeletonItemCartInfo';
import SkeletonItemAdditional from '../components/Item/SkeletonItemAdditional';

const ItemPage: FC = () => {
  // const [newProducts, loading, error] = useProductsAPI<ProductCollection>(
  //   {},
  //   getNewProducts,
  // );

  const [product, setProduct] = useState<FullProductInformation>({
    product: {
      id: 0,
      itemId: '',
      name: '',
      category: '',
      price: 0,
      fullPrice: 0,
      screen: '',
      capacity: '',
      ram: '',
      color: '',
      image_id: 0,
      image_catalog: '',
      year: 0,
      description: '',
    },
    productLinks: {},
  });

  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId).then((data) => {
      console.log(data);
      setProduct(data);
    });
  }, []);

  return (
    <>
      <main className="item">
        <h2 className="item__name">{product.product.name}</h2>
        <div className="item__content">
          <div className="item__gallery container section">
            <ItemGallery
              itemName={product.product.name}
              photos={product.productLinks}
            />
          </div>
          <div className="item__cart-info container section">
            <ItemCartInfo info={product.product} />
          </div>
          <div className="item__about container section">
            <ItemAbout description={product.product.description} />
          </div>
          <div className="item__tech container section">
            <ItemTechSpecs tech={product.product} />
          </div>
        </div>
        {/* {newProducts && <GoodsSliderCollection products={newProducts.rows} />} */}
      </main>

      {/* <main className="item skeleton-item">
        <div className="item__name skeleton-item__name"></div>
        <div className="item__content">
          <div className="item__gallery container section">
            <SkeletonItemGallery/>
          </div>
          <div className="item__cart-info container section">
            <SkeletonItemCartInfo/>
          </div>
          <div className="item__about container section">
            <SkeletonItemAdditional/>
          </div>
          <div className="item__tech container section">
            <SkeletonItemAdditional/>
          </div>
        </div>
      </main> */}
    </>
  );
};

export default ItemPage;
