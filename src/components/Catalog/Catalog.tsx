import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Card from '../Card/Card';

import Pagination from '../Pagination/Pagination';

import { getSomeProducts } from '../../api/api';
import { ProductCollection } from '../../Types/products.types';

export const SortingOpgions = ['Newest', 'Oldest', 'Prise'];
export const PaginationOptions: string[] = ['16', '32', '64'];

export const Catalog: React.FC = () => {
  const [productList, setProductList] = useState<ProductCollection | null>(
    null,
  );
  const [countOfPage, setCountOfPage] = useState<number | null>(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.toString();
  
  const limit  = searchParams.get('limit') || '16';

  console.log(limit)

  useEffect(() => {
    try {
      getSomeProducts<ProductCollection>(params).then((data) => {
        const count = Math.ceil(data.count / +limit);
        setCountOfPage(count);
        setProductList(data);

        console.log(data.count, data);
      });
      console.log(productList);
    } catch {
      console.log('error');
    }
  }, [params, limit]);

  return (
    <div className="catalog container section">
      <h1 className="catalog__title">Mobile phones</h1>
      {productList ? (
        <p className="catalog__count">{productList.rows.length} models</p>
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
      {productList && (
        <div className="catalog__item-list">
          {productList?.rows.map((phone) => (
            <Card key={phone.id} phone={phone} />
          ))}
        </div>
      )}

      {countOfPage ? (
        <Pagination count={countOfPage} />
      ) : (
        <Pagination count={4} />
      )}
    </div>
  );
};
