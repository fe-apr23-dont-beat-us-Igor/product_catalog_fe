import React, { useContext } from 'react';

interface Props {
  totalCost: number;
  handleModal: () => void;
  totalItem: number;
}

export const CartCheckout: React.FC<Props> = ({
  handleModal,
  totalCost,
  totalItem,
}) => {
  return (
    <div className="checkout__container">
      {/* <div className="checkout__info"> */}
      <h1 className="checkout__total-price">${totalCost}</h1>
      <p className="checkout__text">{`Total for ${totalItem} items`}</p>
      {/* </div> */}
      <div className="checkout__line"></div>
      <button className="checkout__button" onClick={() => handleModal()}>
        Checkout
      </button>
    </div>
  );
};
