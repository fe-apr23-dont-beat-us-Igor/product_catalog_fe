import React, { useEffect, useState } from 'react';
import './CartPage.scss';
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
  const [cartProducts, setCartProducts] = useState<ProductInCart[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { cart, removeAll } = useAppContext();

  // для роботи з cart та like
  useEffect(() => {
    getProductCollectionByIds(cart).then((data) => {
      const cartProducts: ProductInCart[] = data.map((product) => ({
        quantity: 1,
        product: product,
      }));
      console.log(data);
      setCartProducts(cartProducts);
    });
  }, [cart]);
  //

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
    removeAll();
  };

  const totalCost = (): number => {
    const priceList = cartProducts.map(
      ({ product, quantity }) => product.price * quantity,
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
          {cartProducts.length > 0 ? (
            <>
              <div className="card__items">
                <SkeletonCartItem />
                {cartProducts.map((product) => (
                  <CartItem
                    key={product.product.id}
                    product={product}
                    changeQuantity={changeQuantity}
                  />
                ))}
              </div>
            </>
          ) : (
            <h4>Cart is empty</h4>
          )}
        </div>


        <CartCheckout
          totalCost={totalCost()}
          totalItem={totalItem()}
          handleModal={handleModal}
        />
        <SkeletonCartCheckout />
      </div>
    </div>
  );
};
