import { FC, MutableRefObject, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import close from '../../images/Close.svg';
import like from '../../images/Like.svg';
import cart from '../../images/Cart.svg';
import classNames from 'classnames';

type Props = {
  ref: MutableRefObject<any> | null;
  toggler: (value: any) => void;
};

export const BurgerMenu: FC<Props> = ({ ref, toggler }) => {

  return (
    <nav ref={ref} className="menu">
      <div className="container">
        <header className="menu__header">
          <div className="menu__header__container">
            <Link to="/home" className="logo menu__header--logo">
              <img
                src={logo}
                alt="Nice Gadgets logo"
                className="logo-img menu__header--logo--img"
              />
            </Link>
          </div>

          <Link
            to="/home"
            className="logo menu__header--close-icon"
            onClick={toggler}
          >
            <img
              src={close}
              alt="Nice Gadgets logo"
              className="logo-img logo menu__header--close-icon--img"
            />
          </Link>
        </header>

        <ul className="menu__list">
          <li className="menu__list--item">
            <a href="/home" className="menu__list--link">
              home
            </a>
          </li>

          <li className="menu__list--item">
            <a href="/phones" className="menu__list--link">
              phones
            </a>
          </li>

          <li className="menu__list--item">
            <a href="/tablets" className="menu__list--link">
              tablets
            </a>
          </li>

          <li className="menu__list--item">
            <a href="/accessories" className="menu__list--link">
              accessories
            </a>
          </li>
        </ul>
      </div>

      <footer className="menu__footer">
        <div className="side-button side-button--favourites menu__footer--item">
          <a href="">
            <img src={like} alt="favourites-icon" />
          </a>
        </div>
        <div className="side-button side-button--cart menu__footer--item">
          <a href="">
            <img src={cart} alt="cart-icon" />
          </a>
        </div>
      </footer>
    </nav>
  );
};
