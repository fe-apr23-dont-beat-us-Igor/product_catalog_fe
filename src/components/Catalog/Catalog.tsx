import { useEffect, useState } from 'react';
import './Catalog.scss';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Card from '../Card/Card';
import { Pagination } from '../Pagination/Pagination';
import { getPhones, getSomeProducts } from '../../api/api';
import { img } from '../../images/images';

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

export const Catalog: React.FC = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<any[]>(mockPhone);

  /* Таким чином ти зробиш дропдаун контрольованим   */
  const [dropdownValue, setDropdownValue] = useState('');
  console.log(dropdownValue);
  /* Таким чином ти зробиш дропдаун контрольованим   */

  useEffect(() => {
    // getSomeProducts(1, 16).then((data) => setPhonesFromServer(data));
    // try {
    //   getPhones().then(setPhonesFromServer);
    // } catch {
    //   console.log('error');
    // }
  }, []);

  return (
    <div className="catalog container">
      <h1 className="catalog__title">Mobile phones</h1>
      <p className="catalog__count">{phonesFromServer.length} models</p>
      <div className="catalog__filters">
        <Dropdown
          label={'Sort By'}
          options={options}
          setValue={setDropdownValue}
        />
        <Dropdown
          label={'Items On Page'}
          options={options}
          setValue={setDropdownValue}
        />
      </div>
      <div className="catalog__item-list">
        {phonesFromServer.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>

      {/* <Pagination total={1}/> */}
    </div>
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
