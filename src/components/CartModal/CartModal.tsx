import React from 'react';
import '../../styles/components/CartModal.scss';
 
type Props = {
    handleModal: () => void,
}

export const CartModal: React.FC<Props> = ({ handleModal }) => {
  
  // const handleConfirm = () => {
  //   removeAll();
  //   handleModal();
  // };

  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h4 className='modal__text'>Thank you for your purchase</h4>
        <div className='modal__line'></div>
        <div className="modal__buttons_container">
          <button className="modal__button" onClick={handleModal}>
            Return to main page
          </button>
        </div>
      </div>
    </div>
  );
};