import { FC } from 'react';
import Button from '../UI/Button';
import LikeButton from '../UI/LikeButton';
import { Product } from '../../Types/products.types';
import { useAppContext } from '../../context/AppContext';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  info: Product;
}

const colorsList: { [key: string]: string } = {
  'space-gray': '#65737e',
  'spacegray': '#65737e',
  'gold': '#f2cd5c',
  'silver': '#dddddd',
  'black': '#000',
  'rose-gold': '#ffeadd',
  'rosegold': '#ffeadd',
  'red': '#d71313',
  'white': '#fff',
  'coral': ' #ff7f50',
  'yellow': '#ffea00',
  'purple': '#d7b4f3',
  'green': '#40e0d0',
  'midnightgreen': '#4d5c2b',
  'starlight': '#f6f6f6',
  'pink': '#ff90bb',
  'sky-blue': '#9999ff',
  'blue': '#0047ab',
};

const ItemCartInfo: FC<Props> = ({ info }) => {
  const { id, itemId, color, available_colors, available_capacity,
    price, fullPrice, screen, description, ram, capacity } =
    info;

  // Add product to cart and likePage
  const { toggleItem, toggleLike, cart, likeStorage } = useAppContext();

  const handleCartButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    toggleItem(id);
  };

  const isAddButtonActive = cart.includes(itemId);
  const isLikeButtonActive = likeStorage.includes(itemId);

  const handleLikeButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    toggleLike(id);
  };

  const linkChangeColor = itemId.slice(0, itemId.lastIndexOf('-'));
  const changedCapacityTO = itemId.lastIndexOf('-');
  const linkChangeCapacityAfter = itemId.slice(changedCapacityTO + 1);
  const changedCapacityFROM = itemId.slice(0, changedCapacityTO).lastIndexOf('-');
  const linkChangeCapacityBefore = itemId.slice(0, changedCapacityFROM);


  return (
    <section 
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"  
      className="cart-info"
    >
      <div className="cart-info__param">
        <div className="cart-info__text">
          <p className="cart-info__title">Available colors</p>
          <p className="cart-info__id">ID: {id}</p>
        </div>
        <div className="cart-info__options">
          {available_colors.split(' ').map(c => {
            const preparedC = c.toLowerCase().trim();
            const isSelected = preparedC === color.toLowerCase().trim();

            return (
              <Link to={`/products/${linkChangeColor}-${c}`}>
                <button
                  className={classNames('colorButton',
                  { 'colorButton--selected': isSelected })}
                  style={{ background: colorsList[c] }}
                >
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="cart-info__param">
        <p className="cart-info__title">Select capacity</p>
        <div className="cart-info__options">
          {available_capacity.split(' ').map(c => {
            const preparedC = c.toLowerCase().trim();
            const isSelected = preparedC === capacity.toLowerCase().trim();

            return (
              <Link to={`/products/${linkChangeCapacityBefore}-${c}-${linkChangeCapacityAfter}`}>
                <button 
                className={classNames('capacityButton',
                  { 'capacityButton--selected': isSelected })}
                >
                  {c}
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="cart-info__price-info">
        <div className="cart-info__price">
          {price 
            ?
              <>
                <h2 className="cart-info__price-new">{`$${price}`}</h2>
                <p className="cart-info__price-old">{`$${fullPrice}`}</p>
              </>
            : <h2 className="cart-info__price-new">{`$${fullPrice}`}</h2>
          }
        </div>

        <div className="cart-info__buttons">
          <div className="cart-info__add-to-cart">
            <Button
              selected={isAddButtonActive}
              onClick={(event) => handleCartButton(event, itemId)}
            />
          </div>
          <LikeButton
            selected={isLikeButtonActive}
            onClick={(event) => handleLikeButton(event, itemId)}
          />
        </div>
      </div>

      <div className="cart-info__characteristics">
        <div className="cart-info__char">
          <p className="cart-info__char-text ">Screen</p>

          <p className="cart-info__char-number">{screen}</p>
        </div>

        <div className="cart-info__char">
          <p className="cart-info__char-text ">Resolution</p>

          <p className="cart-info__char-number">2688x1242</p>
        </div>

        <div className="cart-info__char">
          <p className="cart-info__char-text ">Processor</p>

          <p className="cart-info__char-number">Apple A12 Bionic</p>
        </div>

        <div className="cart-info__char">
          <p className="cart-info__char-text ">RAM</p>

          <p className="cart-info__char-number">{ram}</p>
        </div>
      </div>
    </section>
  );
};

export default ItemCartInfo;
