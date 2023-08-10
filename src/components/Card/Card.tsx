import { FC, useEffect } from 'react';
import CardButton from '../UI/Button';
import LikeButton from '../UI/LikeButton';
import { img } from '../../images/images';
import { Link, useNavigation } from 'react-router-dom';
import { Product } from '../../Types/products.types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useAppContext } from '../../context/AppContext';
import { setImgUrl } from '../../api/api';
// import Aos from 'aos';
import AOS from 'aos';

type Props = {
  phone: Product | any;
};

export const Card: FC<Props> = ({ phone }) => {
  const { cart, toggleItem, likeStorage, toggleLike } = useAppContext();

  const {
    name,
    fullPrice,
    price,
    capacity,
    ram,
    itemId,
    screen,
    image_catalog,
  } = phone;

  const isAddButtonActive = cart.includes(itemId);

  const handleCartButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    toggleItem(id);
  };

  const isLikeButtonActive = likeStorage.includes(itemId);

  const handleLikeButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    toggleLike(id);
  };

  return (
    <Link
      className="card"
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"
      to={`/products/${itemId}`}
    >
      <div data-qa="card">
        <img
          className="card__image"
          src={setImgUrl(image_catalog)}
          alt={name}
        />
        <p className="card__name">{name}</p>

        <div className="card__price">
          {price ? (
            <>
              <h4 className="card__price-new">{price}$</h4>
              <h4 className="card__price-old">{fullPrice}$</h4>
            </>
          ) : (
            <h4 className="card__price-new">{fullPrice}$</h4>
          )}
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
            selected={isAddButtonActive}
            onClick={(event) => handleCartButton(event, itemId)}
          />
          <LikeButton
            selected={isLikeButtonActive}
            onClick={(event) => handleLikeButton(event, itemId)}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
