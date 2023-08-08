import React, { useContext } from "react";
import '../../styles/components/CartCheckout.scss';
// import { CartProduct } from "../../Types/cart.types";
import { CartContext } from "../../context/CartContext";

interface Props {
    totalCost: number,
    handleModal: () => void,
}

export const CartCheckout: React.FC<Props> = ({ handleModal, totalCost } ) => {
  const { cartItems } = useContext(CartContext);
  const totalItem = cartItems.reduce ((total, item) => total + item.count, 0);

  return (
    <>
      <div className="checkout__container">
        <div className="checkout__info">
          <h1 className="checkout__total-price">
            ${totalCost}
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