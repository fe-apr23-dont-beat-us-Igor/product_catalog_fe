import React, { useEffect, useState, useContext } from 'react';
import './CartPage.scss';
import { BackButton } from '../../components/UI/BackButton';
import { CartModal } from '../../components/CartComponents/CartModal';
import { CartItem } from '../../components/CartComponents/CartItem';
import { CartCheckout } from '../../components/CartComponents/CartCheckout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { CartContext } from '../../context/CartContext';
import { Product } from '../../Types/products.types';
import { getPhoneById } from '../../api/api';

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

export const CartPage: React.FC = () => {
  const { cartItems, getCount } = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const fetchedProducts = await Promise.all(cartItems.map((item) => 
      getPhoneById(item.id)));

      setProducts(fetchedProducts);
    };

    fetchData();
  }, [cartItems]);

  const totalCost = products.reduce((total, product) => 
  total + product.price * getCount(product.itemId), 0);


  return (
    <div>
      <BackButton />
      <h1 className="title">Cart</h1>

        {isModalVisible && totalCost > 0 && 
          <CartModal handleModal={handleModal} /> }
      <div className="cart__page">
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className="card__items">

              {products.map((product) => 
                <CartItem 
                  key={product.id} 
                  product={product} 
                  count={getCount(product.itemId)}
                />)}
              </div>
            </>
          ) : (
            <h4>Cart is empty</h4>
          )}
        </div>

        <CartCheckout
          totalCost={totalCost}
          handleModal={handleModal}
        />
      </div>
    </div>
  );
};
