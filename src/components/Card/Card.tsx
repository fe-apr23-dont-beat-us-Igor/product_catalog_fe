import React from 'react';
import './Card.scss';

import { Phone } from '../Phones/Phones';

interface Props {
  phone: Phone;
}


export const Card: React.FC<Props> = ({ phone }) => {
  const {
    name,
    price,
    capacity,
    ram,
    discount,
    screen,
  } = phone;
  
  return (
    <article className="card" data-qa="card">
      <img
        className="card__image"
        src="./images/image 2.png"
        alt="APPLE A1419 iMac 27"
      />
      <h1 className="card__name">
        {name}
      </h1>

      <div className="card__price">
        <p className="card__price-new">
          {price}$
        </p>

        <p className="card__price-old">
          {discount}
        </p>
      </div>

      <div className="card__line"></div>

      <div className="card__characteristics">
        <div className="card__char">
          <p className="card__char-text">
            Screen
          </p>

          <p className="card__char-number">
            {screen}
          </p>
        </div>

        <div className="card__char">
          <p className="card__char-text">
            Capacity
          </p>

          <p className="card__char-number">
            {capacity}
          </p>
        </div>

        <div className="card__char">
          <p className="card__char-text">
            RAM
          </p>

          <p className="card__char-number">
            {ram}
          </p>
        </div>
      </div>

      <div className="card__buttons">
        <a
          href="#AddToCart"
          className="card__buttons-addCart"
        >
          Add to cart
        </a>
        <a
          href="#AddToList"
          className="card__buttons-addList"
        >
        </a>
      </div>
    </article>
  );
};
