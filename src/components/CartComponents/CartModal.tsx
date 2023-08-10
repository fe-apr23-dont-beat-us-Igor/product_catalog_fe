import React, { useContext } from 'react';
import '../../styles/components/CartModal.scss';
import { NavLink } from 'react-router-dom';

type Props = {
    handleModal: () => void,
}

export const CartModal: React.FC<Props> = ({ handleModal }) => {  
  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h2 className='modal__text'>Thank you for your purchase!</h2>
        <div className='modal__line'></div>
        <div className="modal__buttons_container">
          <NavLink
            to="/home"
          >
            <button className="modal__button" onClick={handleModal}>
              Return to main page
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};