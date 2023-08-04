import React from "react";
import '../../styles/components/CartCheckout.scss';
import { CartProduct } from "../Catalog/Catalog_Types";

interface Props {
    //totalCost: number,
    handleModal: () => void,
    cartItems: CartProduct[],
    isModalVisible: boolean,
}

export const CartCheckout: React.FC<Props> = (
  { 
  handleModal, 
  cartItems,
  isModalVisible,
 }
  ) => {
  const totalItem = cartItems.reduce ((total, item) => total + item.count, 0);
  const totalSum = cartItems.reduce ((total, item) => 
  total + item.count * item.priceDiscount, 0);

  return (
    <>
      <div className="checkout__container">
        <div className="checkout__info">
          <h1 className="checkout__total-price">
            {totalSum}
          </h1>
          <p className="checkout__text">
          {`Total for ${totalItem} items`} 
        
          </p>
        </div>
        <div className="checkout__line"></div>
        <button className="checkout__button" onClick={() => handleModal()} > 
           
          Checkout
        </button>
      </div>
    </>
  );
};