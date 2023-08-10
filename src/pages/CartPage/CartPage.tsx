import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/UI/BackButton';
import { CartModal } from '../../components/CartComponents/CartModal';
import { CartItem } from '../../components/CartComponents/CartItem';
import { CartCheckout } from '../../components/CartComponents/CartCheckout';
import { getProductCollectionByIds } from '../../api/api';
import { useAppContext } from '../../context/AppContext';
import { ProductInCart } from '../../Types/cart.types';
import SkeletonCartItem from '../../components/CartComponents/SkeletonCartItem';
import { SkeletonCartCheckout } from '../../components/CartComponents/SkeletonCartCheckout';

export const CartPage: React.FC = () => {
  const { cart, removeAll } = useAppContext();
  const [cartProducts, setCartProducts] = useState<ProductInCart[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // для роботи з cart та like
  useEffect(() => {
    console.log(isLoading);
    getProductCollectionByIds(cart)
      .then((data) => {
        const cartProducts: ProductInCart[] = data.map((product) => ({
          quantity: 1,
          product: product,
        }));
        setCartProducts(cartProducts);
      })
      .finally(() => setIsLoading(false));

    console.log(isLoading);
  }, [cart]);
  //

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
    removeAll();
  };

  const totalCost = (): number => {
    const priceList = cartProducts.map(
      ({ product, quantity }) => product.price 
      ? product.price * quantity 
      : product.fullPrice * quantity
    );

    return priceList.reduce((acc, item) => acc + item, 0);
  };

  const totalItem = (): number => {
    return cartProducts.reduce((acc, item) => acc + item.quantity, 0);
  };

  const changeQuantity = (num: number, id: string) => {
    setCartProducts((prev) =>
      prev.map((item) => {
        const quantity =
          item.product.itemId === id ? item.quantity + num : item.quantity;

        return { ...item, quantity };
      }),
    );
  };

  return (
    <div>
      <BackButton />
      <h1 className="title">Cart</h1>
      {isModalVisible && <CartModal handleModal={handleModal} />}
      <div className="cart__page">
        <div>
          <div className="card__items">
            {isLoading && (
              <>
                <SkeletonCartItem />
                <SkeletonCartItem />
                <SkeletonCartItem />
              </>
            )}
            {cartProducts.map((product) => (
              <CartItem
                key={product.product.id}
                product={product}
                changeQuantity={changeQuantity}
              />
            ))}
          </div>
          {!cartProducts.length && <h4>Cart is empty</h4>}
        </div>
        {isLoading ? (
          <SkeletonCartCheckout />
        ) : (
          <CartCheckout
            totalCost={totalCost()}
            totalItem={totalItem()}
            handleModal={handleModal}
          />
        )}

      </div>
    </div>
  );
};
