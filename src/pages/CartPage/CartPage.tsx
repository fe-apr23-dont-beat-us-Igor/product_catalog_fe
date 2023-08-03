import React, { useState } from 'react';
import './CartPage.scss';
import { Phone } from '../../components/Catalog/Catalog';
import { BackButton } from '../../components/UI/BackButton';
import { CartModal } from '../../components/CartModal/CartModal';
import { CartItem } from '../../components/CartItem/CartItem';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout';

const cartItems = [{}];
export const CartPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <BackButton />
      <h1 className="title">Cart</h1>
       {/* <CartModal handleModal={handleModal} /> */}
      <div className="cart__page">
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className="card__items">
                <CartItem />
              </div>
            </>
          ) : (
            <h4>Cart is empty</h4>
          )}
        </div>

        <CartCheckout />
      </div>
    </div>
  );
};
