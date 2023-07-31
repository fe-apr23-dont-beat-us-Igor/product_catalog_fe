import { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import like from '../../images/Like.svg';
import cart from '../../images/Cart.svg';
import burger from '../../images/Menu.svg';

const pages = ['HOME', 'PHONES', 'TABLETS', 'ACCESSORIES'];


export const Header: FC = () => {
  return (
    <header className="header">
      <div className="nav-and-logo">
        <Link to="/home" className="logo">
          <img
            // src="/images/Logo.svg"
            src={logo}
            alt="Nice Gadgets logo"
            className="logo-img"
          />
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
          <a href="#">
            <img src={burger} alt="burger-icon" />
          </a>
        </div>
        <div className="side-button side-button--favourites">
          <a href="#">
            <img src={like} alt="favourites-icon" />
          </a>
        </div>
        <div className="side-button side-button--cart">
          <a href="#">
            <img src={cart} alt="cart-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};
