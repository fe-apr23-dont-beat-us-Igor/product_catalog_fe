import React from 'react';
import '../../styles/components/CartModal.scss';
import { CartProduct } from '../../Types/cart.types';
import { NavLink } from 'react-router-dom';
 
type Props = {
    handleModal: () => void,
    cartItems: CartProduct[],
    isModalVisible:boolean,
}

export const CartModal: React.FC<Props> = ({ 
  handleModal,
  cartItems, 
  isModalVisible }) => {
  
  const handleConfirm = () => {
    cartItems = [];
    handleModal();
  };

  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h2 className='modal__text'>Thank you for your purchase!</h2>
        <div className='modal__line'></div>
        <div className="modal__buttons_container">
          <NavLink
            to="/home"
          >
            <button className="modal__button" onClick={handleConfirm}>
              Return to main page
            </button>
          </NavLink>
         
        </div>
      </div>
    </div>
  );
};