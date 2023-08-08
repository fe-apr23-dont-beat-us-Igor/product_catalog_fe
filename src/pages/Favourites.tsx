import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card/Card';
import { Product } from '../Types/products.types';
import '../styles/components/Favourites.scss';
import { getProductCollectionByIds } from '../api/api';
import { useAppContext } from '../context/AppContext';
import { ProductInCart } from '../Types/cart.types';

export const Favourites: React.FC = () => {
  const [favouritesProducts, setFavouritesProducts] = useState<ProductInCart[]>(
    [],
  );

  const { likeStorage } = useAppContext();

  useEffect(() => {
    getProductCollectionByIds(likeStorage).then((data) => {
      const cartProducts: ProductInCart[] = data.map((product) => ({
        quantity: 1,
        product: product,
      }));
      console.log(data);
      setFavouritesProducts(cartProducts);
    });
  }, [likeStorage]);

  return (
    <div className="favourites container section">
      <h1 className="favourites__title">Favourites</h1>
      {favouritesProducts ? (
        <p className="favourites__count">{favouritesProducts.length} models</p>
      ) : (
        <p className="favourites__count">0 models</p>
      )}
      <div className="favourites__filters"></div>
      {favouritesProducts.length > 0 && (
        <div className="favourites__item-list">
          {favouritesProducts.map((product) => (
            <Card key={product.product.id} phone={product.product} />
          ))}
        </div>
      )}
    </div>
  );
};
