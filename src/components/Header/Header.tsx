import { FC, MutableRefObject, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { img } from '../../images/images';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { AppContext, useAppContext } from '../../context/AppContext';
import cn from 'classnames';
import { HeaderCounter } from './HeaderCounter';
import { navLinks } from '../../config/config';

// const pages = ['HOME', 'phones?category=phones', 'tablets?category=tablets', 'accessories?category=accessories'];

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
            {navLinks.map(({ title, to }) => (
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

            {likeProductsCount > 0 && 
              <HeaderCounter productsCount={likeProductsCount} />}

          </Link>
        </div>
        <div className="side-button side-button--cart">
          <Link to="/cart" className="side-button">
            <img src={img.cart} alt="cart-icon" />
            {cartProductsCount > 0 &&  
            <HeaderCounter productsCount={cartProductsCount} />}

          </Link>
        </div>
        <div className="side-button side-button--registration">
          <Link to="/registration">
            <img src={img.registration} alt="cart-icon" />
          </Link>
        </div>
      </div>
      {isMenuActive && <BurgerMenu ref={burgerMenu} toggler={toggler} />}
    </header>
  );
};
