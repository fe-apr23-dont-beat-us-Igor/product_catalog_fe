import React, { useEffect, useState } from 'react';
import { CartProduct } from '../Catalog/Catalog_Types';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/CartItem.scss';
import { img } from '../../images/images';


type Props = {
  product: CartProduct,
  cartItems: CartProduct[],
}

export const CartItem: React.FC<Props> = ({ product, cartItems }) => {
  const { name, priceDiscount, id, count } = product;
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState<number>(() => {
    const counter = localStorage.getItem(`${id}`);

    return counter ? JSON.parse(counter).itemCount : 1;
  });

  const storedItem = { id, itemCount, priceDiscount };

  useEffect(() => {
    localStorage.setItem(`${id}`, JSON.stringify({ ...storedItem, itemCount }));
  }, [itemCount]);

  const addOne = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const removeOne = () => {
    setItemCount((prevCount) => prevCount - 1);
  };

  const navigateToDetails = () => {
    navigate(`/phones/${id}`);
  };


  // const image = imageUrl[0];
   const totalPrice = priceDiscount * count;

  const isRemovingDisabled = count === 1;
  const isAddingDisabled = count > 9;


  return (
    <div className='cartItem'>
      <div className='cartItem__info'>
       <button
         className='cartItem__delete'
        //  onClick={() => {
        //     removeItem(id);
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
              removeOne();
            }}
            disabled={isRemovingDisabled}
          >
          </button> 
        
          <p className="cartItem__quantity-btns-number">{count}</p>

          <button
            className="cartItem__quantity-btns-plus"
            onClick={() => {
              addOne();
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
