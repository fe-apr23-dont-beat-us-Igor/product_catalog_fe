import { useEffect, useState } from 'react';
import './Catalog.scss';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Card from '../Card/Card';
import { Pagination } from '../Pagination/Pagination';
import { getPhones } from '../../api/api';

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

export const Catalog: React.FC = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);

  /* Таким чином ти зробиш дропдаун контрольованим   */
  const [dropdownValue, setDropdownValue] = useState('');
  console.log(dropdownValue);
  /* Таким чином ти зробиш дропдаун контрольованим   */

  useEffect(() => {
    // getSomeProducts(1, 16).then(setPhonesFromServer);
    getPhones().then(setPhonesFromServer);

  }, []);

  return (
    <>
      <div className="phones-container ">
        <div className="breadcrumbs">
          <Link to="/home">
            <img
              src="/images/Home.svg"
              alt="home-icon"
              className="breadcrumbs__home-icon"
            />
          </Link>
          <img
            src="/images/arrow-right.svg"
            alt="arrow-icon"
            className="breadcrumbs__arrow"
          />
          <Link to="/phones">
            <span className="breadcrumbs__text">Phones</span>
          </Link>
        </div>
        <h1 className="catalog-title">Mobile phones</h1>
        <span className="phones-count">{phonesFromServer.length} models</span>
        <div className="dropdown-container">
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
        <div className="phones-list">
          {phonesFromServer.map((phone) => (
            <Card key={phone.id} phone={phone} />
          ))}
        </div>

        {/* <Pagination total={1}/> */}
      </div>
    </>
  );
};
