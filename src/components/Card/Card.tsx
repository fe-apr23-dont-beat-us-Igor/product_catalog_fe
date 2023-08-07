import { FC } from 'react';
import CardButton from '../UI/Button';
import LikeButton from '../UI/LikeButton';
import { img } from '../../images/images';
import { Link, useNavigation } from 'react-router-dom';
import { Product } from '../../Types/products.types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useAppContext, useCart } from '../../context/AppContext';

type Props = {
  phone: Product | any;
};

export const Card: FC<Props> = ({ phone }) => {
  const { setCartStorage, setLikeStorage, cartStorage, likeStorage } =
    useAppContext();

  // const { addProductToCart, remove } = useCart();

  const toggleItem = (id: string) => {
    setCartStorage((prev) => {
      const hasId = prev.includes(id);

      return hasId ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };


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
    <Link to={`/products/${itemId}`}>
      {' '}
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
          <CardButton
            selected={cartStorage.includes(itemId)}
            onClick={(event) => {
              event.preventDefault();
              toggleItem(itemId);
            }}
          />
          <LikeButton
            selected={likeStorage.includes(itemId)}
            onClick={(event) => {
              event.preventDefault();
              toggleItem(itemId);
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
