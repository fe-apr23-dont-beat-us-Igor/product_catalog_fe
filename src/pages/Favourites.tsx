import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card/Card';
import { Product } from '../Types/products.types';
import { getProductCollectionByIds } from '../api/api';
import { useAppContext } from '../context/AppContext';
import { ProductInCart } from '../Types/cart.types';
import { useProductsAPI } from '../hooks/useFetch';
import SkeletonCard from '../components/Card/SkeletonCard';

export const Favourites: React.FC = () => {
  const { likeStorage } = useAppContext();
  const [favourites, loading, error] = useProductsAPI<Product[], string[]>(
    likeStorage,
    // @ts-ignore
    getProductCollectionByIds,
  );

  console.log(favourites);

  return (
    <div className="favourites container section catalog__container">
      <h1 className="favourites__title">Favourites</h1>
      {favourites ? (
        <p className="favourites__count">{favourites.length} models</p>
      ) : (
        <p className="favourites__count">0 models</p>
      )}
      <div className="favourites__filters"></div>
      {loading && (
        <div className="favourites__item-list">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      {favourites && favourites.length > 0 && (
        <div className="favourites__item-list">
          {favourites.map((product) => (
            <Card key={product.id} phone={product} />
          ))}
        </div>
      )}
    </div>
  );
};
