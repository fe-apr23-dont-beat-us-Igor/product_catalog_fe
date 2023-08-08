import { FC, MutableRefObject } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import close from '../../images/Close.svg';
import like from '../../images/Like.svg';
import cart from '../../images/Cart.svg';
import { navLinks } from '../../config/config';

type Props = {
  ref: MutableRefObject<any> | null;
  toggler: (value: any) => void;
};

const pages = [
  {
    id: 1,
    title: 'home',
  },
  {
    id: 2,
    title: 'phones',
  },
  {
    id: 3,
    title: 'tablets',
  },
  {
    id: 4,
    title: 'accessories',
  },
];

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
          {/* {navLinks.map(({ title, to }) => (
            <li className="menu__list--item" key={title}>
              <Link className="menu__list--link" to={to}>
                {title}
              </Link>
            </li>
          ))} */}
          {pages.map(page => (
            <li className="menu__list--item" key={page.id}>
              <a href={`/${page.title}`} className="menu__list--link">
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="menu__footer">
        <div className="side-button side-button--favourites menu__footer--item">
          <a href="#">
            <img src={like} alt="favourites-icon" />
          </a>
        </div>
        <div className="side-button side-button--cart menu__footer--item">
          <a href="#">
            <img src={cart} alt="cart-icon" />
          </a>
        </div>
      </footer>
    </nav>
  );
};
