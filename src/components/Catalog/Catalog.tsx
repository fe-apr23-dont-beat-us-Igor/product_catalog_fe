import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Card from '../Card/Card';

import Pagination from '../Pagination/Pagination';

import { getProducts } from '../../api/api';
import { ProductCollection } from '../../Types/products.types';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useProductsAPI } from '../../hooks/useFetch';

export const SortingOpgions = ['Newest', 'Oldest', 'Prise'];
export const PaginationOptions: string[] = ['16', '32', '64'];

export const Catalog: FC = () => {
  const [products, loading, error] = useProductsAPI<ProductCollection>(
    {},
    getProducts,
  );

  const isRender = !loading && !error && products?.rows;

  const limit = 16;
  const count = products?.count ? Math.ceil(products?.count / limit) : 4;

  return (
    <div className="catalog container section">
      <Breadcrumbs />
      <h1 className="catalog__title">Mobile phones</h1>
      {products ? (
        <p className="catalog__count">{products.count} models</p>
      ) : (
        <p className="catalog__count">0 models</p>
      )}
      <div className="catalog__filters">
        <Dropdown
          label={'Sort By'}
          options={SortingOpgions}
          paramKey={'SortBy'}
        />
        <Dropdown
          label={'Items On Page'}
          options={PaginationOptions}
          paramKey={'limit'}
        />
      </div>
      {isRender && (
        <div className="catalog__item-list">
          {products.rows.map((phone) => (
            <Card key={phone.id} phone={phone} />
          ))}
        </div>
      )}

      {count && (
        <Pagination count={count} />
      )}
    </div>
  );
};
