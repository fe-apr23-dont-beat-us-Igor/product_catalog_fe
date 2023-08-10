import React from 'react';

import '../../styles/components/CartItem.scss';
import { img } from '../../images/images';
import { ProductInCart } from '../../Types/cart.types';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { setImgUrl } from '../../api/api';

type Props = {
  product: ProductInCart;
  changeQuantity: (num: number, id: string) => void;
};

export const CartItem: React.FC<Props> = ({ product, changeQuantity }) => {
  const { name, price, itemId, image_catalog, fullPrice } = product.product;
  const { removeItem } = useAppContext();

  const totalPrice = price
    ? price * product.quantity
    : fullPrice * product.quantity;
  const isRemovingDisabled = product.quantity === 1;
  const isAddingDisabled = product.quantity > 9;

  return (
    <Link
      to={`/products/${itemId}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="cartItem">
        <div className="cartItem__info">
          <button
            className="cartItem__delete"
            onClick={(event) => {
              event.preventDefault();
              removeItem(itemId);
            }}
          >
            <img
              className="cartItem__delete-image"
              src={img.close}
              alt="remove item"
            />
          </button>
          <img
            className="cartItem__phone-image"
            src={setImgUrl(image_catalog)}
            alt="item"
          />
          <p className="cartItem__content">{name}</p>
        </div>

        <div className="cartItem__quantity_and_price">
          <div className="cartItem__quantity-btns">
            <button
              className="cartItem__quantity-btns-minus"
              onClick={(event) => {
                event.preventDefault();
                changeQuantity(-1, itemId);
              }}
              disabled={isRemovingDisabled}
            ></button>

            <p className="cartItem__quantity-btns-number">{product.quantity}</p>

            <button
              className="cartItem__quantity-btns-plus"
              onClick={(event) => {
                event.preventDefault();
                changeQuantity(1, itemId);
              }}
              disabled={isAddingDisabled}
            ></button>
          </div>

          <h2 className="cartItem__total-price">${totalPrice}</h2>
        </div>
      </div>
    </Link>
  );
};
