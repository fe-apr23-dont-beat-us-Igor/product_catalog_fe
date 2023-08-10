import { FC, MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
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

  console.log(cartProductsCount, likeProductsCount);


  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return document.body.classList.add('dark-mode');
  });

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
        <div className="side-button side-button--theme">
          <a 
            onClick={() => handleChange()}
            className='side-button'
          >
            <img src={img.darkTheme} alt="burger-icon" className='side-button--theme-pic side-button--color'/>
          </a>
        </div>
        <div className="side-button side-button--burger">
          <a href="#"
            onClick={toggler}
            className='side-button'
          >
            <img src={img.menu} alt="burger-icon" className='side-button--color'/>
          </a>
        </div>
        <div className="side-button side-button--favourites">
          <Link to="/favourites" className="side-button side-button--color">
            <img src={img.like} alt="favourites-icon" />
          </Link>
            {likeProductsCount > 0 && 
              <HeaderCounter productsCount={likeProductsCount} />}
        </div>
        <div className="side-button side-button--cart">
          <Link to="/cart" className="side-button side-button--color">
            <img src={img.cart} alt="cart-icon" />
          </Link>
            {cartProductsCount > 0 &&
            <HeaderCounter productsCount={cartProductsCount} />}
        </div>
        <div className="side-button side-button--registration">
          <Link to="/registration" className='side-button side-button--color'>
            <img src={img.registration} alt="cart-icon" />
          </Link>
            {cartProductsCount > 0 &&
            <HeaderCounter productsCount={cartProductsCount} />}
        </div>
      </div>
      {isMenuActive && 
      <BurgerMenu
        ref={burgerMenu}
        toggler={toggler}
      />}
    </header>
  );
};
