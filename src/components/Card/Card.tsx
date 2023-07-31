import { FC } from 'react';
import { Phone } from '../Catalog/Catalog';
import Button from '../UI/Button';
import LikeButton from '../UI/LikeButton';

interface Props {
  phone: Phone;
}

export const Card: FC<Props> = ({ phone }) => {
  const {
    name,
    priceRegular,
    priceDiscount,
    capacity,
    ram,
    screen,
  } = phone;

  return (
    <article className="card" data-qa="card">
      <img
        className="card__image"
        src="./images/image 2.png"
        alt="APPLE A1419 iMac 27"
      />
      <p className="card__name">{name}</p>

      <div className="card__price">

        <p className="card__price-new">
          {priceRegular}$
        </p>

        <p className="card__price-old">
          {priceDiscount}$
        </p>

      </div>

      <div className="card__line"></div>

      <div className="card__characteristics small-text">
        <div className="card__char">
          <p className="card__char-text ">Screen</p>

          <p className="card__char-number">{screen}</p>
        </div>

        <div className="card__char">
          <p className="card__char-text ">Capacity</p>

          <p className="card__char-number ">{capacity}</p>
        </div>

        <div className="card__char">
          <p className="card__char-text ">RAM</p>

          <p className="card__char-number ">{ram}</p>
        </div>
      </div>

      <div className="card__buttons">
        <Button className="button-primary button-primary--selected" />
        <LikeButton className="likeButton likeButton--selected" />
      </div>
    </article>
  );
};

export default Card;
