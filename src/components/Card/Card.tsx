import { FC } from 'react';
import CardButton from '../UI/Button';
import LikeButton from '../UI/LikeButton';
import { img } from '../../images/images';
import { Link } from 'react-router-dom';
import { Product } from '../../Types/products.types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
  phone: Product | any;
}

export const Card: FC<Props> = ({ phone }) => {

  const { name, priceRegular, priceDiscount, capacity, ram, itemId, screen } =
    phone;

  return (
    <Link to={`/products/${itemId}`} className="card" data-qa="card">
      <img className="card__image" src={img.phone} alt="APPLE A1419 iMac 27" />
      <p className="card__name">{name}</p>

      <div className="card__price">
        <p className="card__price-new">{priceRegular}$</p>

        <p className="card__price-old">{priceDiscount}$</p>
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
        <CardButton selected={false} itemId={itemId} />
        <LikeButton selected={false} />
      </div>
    </Link>
  );
};

export default Card;
