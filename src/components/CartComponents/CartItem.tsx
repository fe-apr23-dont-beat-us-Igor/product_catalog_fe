import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/CartItem.scss';
import { img } from '../../images/images';
import { CartProduct } from '../../Types/cart.types';


type Props = {
  product: CartProduct,
}

export const CartItem: React.FC<Props> = ({ product }) => {
  const { name, priceDiscount, id, count } = product;
  // const navigate = useNavigate();

  // const navigateToDetails = () => {
  //   navigate(`/phones/${id}`);
  // };

  // const image = imageUrl[0];
   const totalPrice = priceDiscount * count;

  // const isRemovingDisabled = count === 1;
  // const isAddingDisabled = count > 9;

  return (
    <div className='cartItem'>
      <div className='cartItem__info'>
       <button
         className='cartItem__delete'
        //  onClick={() => {
        //     removeItem(phone.id);
        //  }}
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
        //  onClick={() => navigateToDetails()}
         href='/'
       >{name}
         {/* Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A) */}
       </a>
      </div>

      <div className='cartItem__quantity_and_price'>
        <div className='cartItem__quantity-btns'>
           <button
            className="cartItem__quantity-btns-minus"
            // onClick={() => {
            //   removeOne(phone.id);
            // }}
            // disabled={isRemovingDisabled}
          >
          </button> 
        
          <p className="cartItem__quantity-btns-number">{count}</p>

          <button
            className="cartItem__quantity-btns-plus"
            // onClick={() => {
            //   addOne(phone.id);
            // }}
            // disabled={isAddingDisabled}
          >
          </button>
        </div>

        <h2 className='cartItem__total-price'>${totalPrice}</h2>
      </div>
    </div>
  );

};
