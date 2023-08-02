import React from "react";
import { Phone } from "../Catalog/Catalog";
import '../../styles/components/CartCheckout.scss';

// interface Props {
//     totalCost: number,
//     handleModal: () => void,
//     cartItems: Phone[],
// }

export const CartCheckout: React.FC = (
  // { 
  // totalCost,
  // handleModal, 
  // cartItems }
  ) => {
  //const totalItem = cartItems.reduce ((total, item) => total + item.count, 0);

  return (
    <>
      <div className="checkout__container">
        <div className="checkout__info">
          <h1 className="checkout__total-price">
            $1598
          </h1>
          <p className="checkout__text">
          {`Total for 2 items`} 
        
          </p>
        </div>
        <div className="checkout__line"></div>
        <button className="checkout__button"> 
          {/* onClick={() => handleModal()} */}
          Checkout
        </button>
      </div>
    </>
  );
};