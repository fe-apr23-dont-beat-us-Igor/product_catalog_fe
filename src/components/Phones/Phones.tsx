import { useEffect, useState } from "react";
import './Phones.scss';
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import { Pagination } from "../Pagination/Pagination";

interface Phone {
  age: number,
  type: string,
  id: string,
  imageUrl: string,
  name: string,
  snippet: string,
  price: number,
  discount: number,
  screen: string,
  capacity: string,
  ram: string,
}

export const Phones: React.FC = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);

  useEffect(() => {
    fetch('https://mate-academy.github.io/react_phone-catalog/api/products.json')
      .then(res => res.json())
      .then(phones => setPhonesFromServer(phones));
  }, []);
  const total = phonesFromServer.length;

  return (
    <>
      <div className="phones-container">
        <div className="tracking">
          <Link to='/home'>
            <img
              src="/images/Home.svg"
              alt="home-icon"
              className="tracking__home-icon"
            />
          </Link>
          <img
            src="/images/Chevron (Arrow Right).svg"
            alt="arrow-icon"
            className="tracking__arrow"
          />
          <Link to='/phones'>
            <span className="tracking__text">Phones</span>
          </Link>
        </div>
        <h1 className="catalog-title">
          Mobile phones
        </h1>
        <div className="phones-list">
          {phonesFromServer.map(phone => (
            <Card />
          ))}
        </div>
        <Pagination total={total} />
      </div>
    </>
  );
};