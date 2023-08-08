import React, { useContext } from 'react';
import '../../styles/components/CartCheckout.scss';

interface Props {
  totalCost: number;
  handleModal: () => void;
}

export const CartCheckout: React.FC<Props> = ({ handleModal, totalCost }) => {
  return (
    <>
      <div className="checkout__container">
        <div className="checkout__info">
          <h1 className="checkout__total-price">{totalCost}</h1>
          <p className="checkout__text">
            {/* {`Total for ${totalItem} items`}  */}
          </p>
        </div>
        <div className="checkout__line"></div>
        <button className="checkout__button" onClick={() => handleModal()}>
          Checkout
        </button>
      </div>
    </>
  );
};
