import React from 'react';
import '../../styles/components/CartModal.scss';
import { CartProduct} from '../Catalog/Catalog_Types';
 
type Props = {
    handleModal: () => void,
    cartItems: CartProduct[],
    isModalVisible:boolean,
}

export const CartModal: React.FC<Props> = ({ handleModal, cartItems, isModalVisible }) => {
  
  const handleConfirm = () => {
    cartItems = [];
    handleModal();
  };

  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h4 className='modal__text'>Thank you for your purchase</h4>
        <div className='modal__line'></div>
        <div className="modal__buttons_container">
          <button className="modal__button" onClick={handleConfirm}>
            Return to main page
          </button>
        </div>
      </div>
    </div>
  );
};