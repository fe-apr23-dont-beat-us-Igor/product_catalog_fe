import React, { useEffect, useState } from 'react';
import './CartPage.scss';
import { Phone } from '../../components/Catalog/Catalog';
import { BackButton } from '../../components/UI/BackButton';
import { CartModal } from '../../components/CartComponents/CartModal';
import { CartItem } from '../../components/CartComponents/CartItem';
import { CartCheckout } from '../../components/CartComponents/CartCheckout';
import { CartProduct } from '../../components/Catalog/Catalog_Types';

const cartItems = [{
  id: 1,
  name: 'Apple iPhone 10 128GB Silver',
  capacity: '128GB',
  priceRegular: 1000,
  priceDiscount: 850,
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
  priceRegular: 1300,
  priceDiscount: 1250,
  count: 3,
},];

export const CartPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <BackButton />
      <h1 className="title">Cart</h1>
        {isModalVisible && <CartModal 
          handleModal={handleModal} 
          cartItems={cartItems}
          isModalVisible={isModalVisible}
        /> }
      <div className="cart__page">
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className="card__items">
              {cartItems.length > 0 && (
                cartItems.map((product) => 
                <CartItem 
                  key={product.id} 
                  product={product} 
                  cartItems={cartItems}
                />))}
             
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
