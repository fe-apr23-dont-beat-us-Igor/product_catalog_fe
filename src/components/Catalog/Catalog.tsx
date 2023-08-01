import { useEffect, useState } from "react";
import './Catalog.scss';
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Card from "../Card/Card";

export interface Phone {
  age: number,
  type: string,
  id: string,
  imageUrl: string,
  name: string,
  snippet: string,
  priceRegular: number,
  priceDiscount: number,
  screen: string,
  capacity: string,
  ram: string,
}

export const Catalog: React.FC = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);

  useEffect(() => {
    fetch('https://product-catalog-be-1l77.onrender.com/products')
      .then(res => res.json())
      .then(phones => setPhonesFromServer(phones));
  }, []);

  return (
    <>
      <div className="phones-container ">
        <div className="breadcrumbs">
          <Link to='/home'>
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
          <Link to='/phones'>
            <span className="breadcrumbs__text">Phones</span>
          </Link>
        </div>
        <h1 className="catalog-title">
          Mobile phones
        </h1>
        <span className="phones-count">
          {phonesFromServer.length} models
        </span>
        <div className="dropdown-container">
          <div className="dropdown-container__item">
            <span className="dropdown-container__text">
              Sort By
            </span>
            <Dropdown />
          </div>
          <div className="dropdown-container__item">
            <span className="dropdown-container__text">
              Items On Page
            </span>
            <Dropdown />
          </div>
        </div>
        <div className="phones-list">
          {phonesFromServer.map(phone => (
            <Card key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </>
  );
};