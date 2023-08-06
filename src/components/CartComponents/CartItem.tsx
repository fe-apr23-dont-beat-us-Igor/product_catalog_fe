import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/components/CartItem.scss';
import { img } from '../../images/images';
import { Product } from '../../Types/products.types';
import { CartContext } from '../../context/CartContext';


type Props = {
  product: Product,
  count: number,
}

export const CartItem: React.FC<Props> = ({ product, count }) => {
  const { name, price, id, image_id } = product;
  const { addOne, removeOne, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  
  const navigateToDetails = () => {
    navigate(`/phones/${id}`);
  };

  const totalPrice = price * count;

  const isRemovingDisabled = count === 1;
  const isAddingDisabled = count > 9;


  return (
    <div className='cartItem'>
      <div className='cartItem__info'>
       <button
         className='cartItem__delete'
         onClick={() => {
            removeItem(product.itemId);
         }}
       >
        <img 
          className='cartItem__delete-image' 
          src={img.close} alt="remove item" 
        />
       </button>
       <img 
         className='cartItem__phone-image'
         src={img.phone} 
         alt="item" 
       />
       <a 
         className='cartItem__content'
         onClick={() => navigateToDetails()}
         href='/'
       >
        {name}
       </a>
      </div>

      <div className='cartItem__quantity_and_price'>
        <div className='cartItem__quantity-btns'>
           <button
            className="cartItem__quantity-btns-minus"
            onClick={() => {
              removeOne(product.itemId);
            }}
            disabled={isRemovingDisabled}
          >
          </button> 
        
          <p className="cartItem__quantity-btns-number">{count}</p>

          <button
            className="cartItem__quantity-btns-plus"
            onClick={() => {
              addOne(product.itemId);
            }}
            disabled={isAddingDisabled}
          >
          </button>
        </div>

        <h2 className='cartItem__total-price'>${totalPrice}</h2>
      </div>
    </div>
  );

};
