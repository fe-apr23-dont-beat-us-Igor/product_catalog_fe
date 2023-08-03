import React from 'react';
import { Phone } from '../Catalog/Catalog';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/CartItem.scss';
import { img } from '../../images/images';
import { url } from 'inspector';

// type Props = {
//   phone: Phone,
//   count: number,
// }

export const CartItem: React.FC = () => {
  // //const { name, priceDiscount, imageUrl, id } = phone;
  // const navigate = useNavigate();

  // const navigateToDetails = () => {
  //   navigate(`/phones/${id}`);
  // };

  // const image = imageUrl[0];
   const totalPrice = 799;

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
       >
         Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
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
            <img 
              className="cartItem__quantity-btns_img" 
              src="Minus.svg"
              alt="-" 
            />
          </button>

          <p className="cartItem__quantity-btns-number">1</p>

          <button
            className="cartItem__quantity-btns-plus"
            // onClick={() => {
            //   addOne(phone.id);
            // }}
            // disabled={isAddingDisabled}
          >
            <img 
              className="cartItem__quantity-btnsplus_img" 
              src='../../Plus.svg'
              alt="+" 
            />
          </button>
        </div>

        <h2 className='cartItem__total-price'>${totalPrice}</h2>
      </div>
    </div>
  );

};
