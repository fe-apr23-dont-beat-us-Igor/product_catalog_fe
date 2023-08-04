import { FC, MutableRefObject, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { img } from '../../images/images';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

const pages = ['HOME', 'PHONES', 'TABLETS', 'ACCESSORIES'];

export const Header: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const burgerMenu = useRef<MutableRefObject<any> | null>(null);

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
            {pages.map((page) => (
              <li className="nav__item" key={page}>
                <Link className="nav__link" to={page.toLowerCase()}>
                  {page}
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
          <a href="#">
            <img src={img.like} alt="favourites-icon" />
          </a>
        </div>
        <div className="side-button side-button--cart">
          <Link to="/cart">
            <img src={img.cart} alt="cart-icon" />
          </Link>
        </div>
      </div>
      {isMenuActive && (
        <BurgerMenu
          ref={burgerMenu}
          toggler={toggler}
        />
      )}
    </header>
  );
};
