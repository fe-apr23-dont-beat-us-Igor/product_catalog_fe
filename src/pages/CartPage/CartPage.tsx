import React, { useEffect, useState, useContext } from 'react';
import './CartPage.scss';
import { BackButton } from '../../components/UI/BackButton';
import { CartModal } from '../../components/CartComponents/CartModal';
import { CartItem } from '../../components/CartComponents/CartItem';
import { CartCheckout } from '../../components/CartComponents/CartCheckout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { CartContext } from '../../context/CartContext';
import { Product } from '../../Types/products.types';
import { getProductCollectionByIds, getProductsById } from '../../api/api';
import { useAppContext } from '../../context/AppContext';

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

interface ProductInCart {
  quantity: number;
  product: Product;
}

export const CartPage: React.FC = () => {
  // const { cartItems, getCount } = useContext(CartContext);
  const [products, setProducts] = useState<ProductInCart[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { cart, removeItem, removeAll } = useAppContext();

  // для роботи з cart та like
  useEffect(() => {
    getProductCollectionByIds(cart).then((data) => {
      const cartProducts: ProductInCart[] = data.map((product) => ({
        quantity: 1,
        product: product,
      }));
      console.log(data);
      setProducts(cartProducts);
    });
  }, []);
  //

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // const totalCost = products.reduce(
  //   (total, product) => total + product.price * getCount(product.itemId),
  //   0,
  // );

  return (
    <div>
      <BackButton />
      <h1 className="title">Cart</h1>
      {/* 
      {isModalVisible && totalCost > 0 && (
        <CartModal handleModal={handleModal} />
      )} */}
      <div className="cart__page">
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className="card__items">
                {products.map((product) => (
                  <CartItem
                    key={product.product.id}
                    product={product.product}
                    count={199}
                  />
                ))}
              </div>
            </>
          ) : (
            <h4>Cart is empty</h4>
          )}
        </div>

        <CartCheckout totalCost={100} handleModal={handleModal} />
      </div>
    </div>
  );
};
