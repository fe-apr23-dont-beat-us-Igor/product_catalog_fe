import React, { useState } from 'react';
import './CartPage.scss';
import { BackButton } from '../../components/UI/BackButton';
import { CartModal } from '../../components/CartComponents/CartModal';
import { CartItem } from '../../components/CartComponents/CartItem';
import { CartCheckout } from '../../components/CartComponents/CartCheckout';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const cartItems = [
  {
    id: 1,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    count: 2,
  },
  {
    id: 2,
    name: 'Apple iPhone 11 128GB Black',
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    count: 1,
  },
  {
    id: 3,
    name: 'Apple iPhone 12 256GB Pink',
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    count: 3,
  },
];

export const CartPage = () => {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  console.log(cart);

  return (
    <div>
      <BackButton />
      <h1 className="title">Cart</h1>
      {/* <CartModal 
          handleModal={handleModal} 
          cartItems={cartItems}
          isModalVisible={isModalVisible}
        /> */}
      <div className="cart__page">
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className="card__items">
                {cartItems.length > 0 &&
                  cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
              </div>
            </>
          ) : (
            <h4>Cart is empty</h4>
          )}
        </div>

        <CartCheckout
          // totalCost={totalCost}
          handleModal={handleModal}
          cartItems={cartItems}
          isModalVisible={isModalVisible}
        />
      </div>
    </div>
  );
};
