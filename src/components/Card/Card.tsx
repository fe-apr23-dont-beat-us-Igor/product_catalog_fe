import { FC } from 'react';
import CardButton from '../UI/Button';
import LikeButton from '../UI/LikeButton';
import { img } from '../../images/images';
import { Link } from 'react-router-dom';
import { Product } from '../../Types/products.types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type Props = {
  phone: Product | any;
  addToCart?: (value: string) => void | undefined
}

export const Card: FC<Props> = ({ phone, addToCart }) => {
  const {
    name,
    priceRegular,
    priceDiscount,
    capacity,
    ram,
    itemId,
    screen,
    image_catalog,
  } = phone;



  return (
    // <Link to={`/products/${itemId}`} className="card" data-qa="card">
    <div className="card" data-qa="card">
      <img className="card__image" src={image_catalog} alt={name} />
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
        {/* <CardButton selected={false} onClick={() => addToCart(itemId)}/> */}
        {addToCart && <CardButton selected={false} onClick={() => addToCart(itemId)}/>}
        <LikeButton selected={false} />
      </div>
    </div>
  );
};

export default Card;
