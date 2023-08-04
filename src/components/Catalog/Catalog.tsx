import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Card from '../Card/Card';
import { getPhones, getSomeProducts } from '../../api/api';
import { img } from '../../images/images';
import Pagination from '../Pagination/Pagination';
import { CatalogProvider, useCatalogContext } from './CatalogContext';
import {
  PaginationOptions,
  ProductCollection,
  SortingOpgions,
} from './Catalog_Types';
import { SearchLink } from '../SearchLink';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

const options = [
  'option1',
  'option2',
  'option3',
  'option4',
  'option5',
  'option6',
];

export interface Phone {
  age: number;
  type: string;
  id: string;
  imageUrl: string;
  name: string;
  snippet: string;
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  ram: string;
}

const mockPhone = [
  {
    id: 1,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 2,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 3,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 4,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 5,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 6,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 7,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
  {
    id: 8,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: '1100',
    priceDiscount: '1050',
  },
];

const CatalogContent: React.FC = () => {
  const [productList, setProductList] = useState<ProductCollection | null>(
    null,
  );
  const [countOfPage, setCountOfPage] = useState<number | null>(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.toString();


  useEffect(() => {
    try {
      getSomeProducts<ProductCollection>('').then((data) => {
        const count = Math.ceil(data.count / data.rows.length);
        setCountOfPage(count);
        setProductList(data);

        console.log(count, data);
      });
      console.log(productList);
    } catch {
      console.log('error');
    }
  }, []);

  return (
    <div className="catalog container section">
      <Breadcrumbs />
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

export const Catalog: FC = () => {
  return (
    <CatalogProvider>
      <CatalogContent />
    </CatalogProvider>
  );
};

{
  /* <div className="breadcrumbs">
        <Link to="/home">
          <img
            src={img.home}
            alt="home-icon"
            className="breadcrumbs__home-icon"
          />
        </Link>
        <img
          src={img.arrowRight}
          alt="arrow-icon"
          className="breadcrumbs__arrow"
        />
        <Link to="/phones">
          <span className="breadcrumbs__text">Phones</span>
        </Link>
      </div> */
}
