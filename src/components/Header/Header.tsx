import { FC, MutableRefObject, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { img } from '../../images/images';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { AppContext, useAppContext } from '../../context/AppContext';
import cn from 'classnames';

// const pages = ['HOME', 'phones?category=phones', 'tablets?category=tablets', 'accessories?category=accessories'];

const pages = [
  { title: 'HOME', to: '/' },
  { title: 'PHONES', to: 'products?category=phones&page=1' },
  { title: 'TABLETS', to: 'products?category=tablets&page=1' },
  { title: 'ACCESSORIES', to: 'products?category=accessories&page=1' },
];

export const Header: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const burgerMenu = useRef<MutableRefObject<any> | null>(null);
  const { cart, likeStorage } = useAppContext();
  const cartProductsCount = cart.length;
  const likeProductsCount = likeStorage.length;

  const toggler = (event: any) => {
    setIsMenuActive((value) => !value);
  };

  return (
    <header className="header header-margin">
      <div className="nav-and-logo">
        <Link to="/home" className="logo">
          <img src={img.logo} alt="Nice Gadgets logo" className="logo-img" />
        </Link>

        <nav className="nav">
          <ul className="nav__list">
            {pages.map(({ title, to }) => (
              <li className="nav__item" key={title}>
                <Link className="nav__link" to={to}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="side-buttons">
        <div className="side-button side-button--burger">
          <a href="#" onClick={toggler}>
            <img src={img.menu} alt="burger-icon" />
          </a>
        </div>
        <div className="side-button side-button--favourites">
          <Link to="/favourites" className="side-button">
            <img src={img.like} alt="favourites-icon" />
            {likeProductsCount > 0 && (
              <div className="icon__counter--like">
                <span className="icon__counter-text" >
                  {likeProductsCount < 100 ? likeProductsCount : '99+'}
                </span>
              </div>
            )}
          </Link>
        </div>
        <div className="side-button side-button--cart">
          <Link to="/cart" className="side-button">
            <img src={img.cart} alt="cart-icon" />
            {cartProductsCount > 0 && (
              <div className="icon__counter">
                <span className="icon__counter-text" >
                  {cartProductsCount < 100 ? cartProductsCount : '99+'}
                </span>
              </div>
            )}
          </Link>
        </div>
      </div>
      {isMenuActive && <BurgerMenu ref={burgerMenu} toggler={toggler} />}
    </header>
  );
};
