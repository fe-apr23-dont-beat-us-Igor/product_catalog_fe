import { FC, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  const { products, setItemsPerPage, setSortType } = useCatalogContext();
  /* Таким чином ти зробиш дропдаун контрольованим   */
  // const [dropdownValue, setDropdownValue] = useState('');
  // console.log(dropdownValue);
  /* Таким чином ти зробиш дропдаун контрольованим   */

  // console.log(1);

  // const [productList, setProductList] = useState<ProductCollection>([]);
  // const [currentPageList, setCurrentPageList] = useState<any[]>([]);

  // const {x} = useSearchParams();
  // const [sortType, setSortType] = useState<string>('');
  // const [itemsPerPage, setItemsPerPage] = useState<string>('16');

  // useEffect(() => {
  //   try {
  //     getSomeProducts(1, 16).then((data) => {
  //       setProductList(data.paginatedProducts);
  //     });
  //     console.log(productList);
  //   } catch {
  //     console.log('error');
  //   }
  // }, []);

  console.log(products);

  return (
    <div className="catalog container section">
      <h1 className="catalog__title">Mobile phones</h1>
      <p className="catalog__count">{products.length} models</p>
      <div className="catalog__filters">
        <Dropdown
          label={'Sort By'}
          options={SortingOpgions}
          setValue={setSortType}
          paramKey={'SortBy'}
        />
        <Dropdown
          label={'Items On Page'}
          options={PaginationOptions}
          setValue={setItemsPerPage}
          paramKey={'count'}
        />
      </div>
      <div className="catalog__item-list">
        {products.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>

      <Pagination />
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
