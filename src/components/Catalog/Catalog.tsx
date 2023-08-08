import { FC } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { getProducts } from '../../api/api';
import { ProductCollection } from '../../Types/products.types';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useProductsAPI } from '../../hooks/useFetch';
import { SearchParams } from '../../servises/searchParam.servise';
import { useLocation } from 'react-router-dom';

export type SortOption = [string, SearchParams];
export const SortingOpgions: SortOption[] = [
  ['A-Z', { sortby: 'name', desc: 'false' }],
  ['Z-A', { sortby: 'name', desc: 'true' }],
  ['Price Up', { sortby: 'price', desc: 'false' }],
  ['Price Down', { sortby: 'price', desc: 'true' }],
  ['Year up', { sortby: 'year', desc: 'false' }],
  ['Year down', { sortby: 'year', desc: 'true' }],
];
export const PaginationOptions: SortOption[] = [
  ['16', { limit: '16' }],
  ['32', { limit: '32' }],
  ['64', { limit: '64' }],
];

export const Catalog: FC = () => {
  const [products, loading, error] = useProductsAPI<ProductCollection>(
    {},
    getProducts,
  );

  console.log(products);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const limit = Number(searchParams.get('limit')) || 16;

  const isRender = !loading && !error && products?.rows;
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
        <Dropdown label={'Sort By'} options={SortingOpgions} />
        <Dropdown label={'Items On Page'} options={PaginationOptions} />
      </div>
      {isRender && (
        <div className="catalog__item-list">
          {products.rows.map((product) => (
            <Card key={product.id} phone={product} />
          ))}
        </div>
      )}

      {count && <Pagination count={count} />}
    </div>
  );
};
