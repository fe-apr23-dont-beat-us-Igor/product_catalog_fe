import React, { useContext } from 'react';
import '../../styles/components/CartModal.scss';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
 
type Props = {
    handleModal: () => void,
}

export const CartModal: React.FC<Props> = ({ handleModal }) => {
  const { removeAll } = useContext(CartContext);
  
  const handleConfirm = () => {
    removeAll();
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