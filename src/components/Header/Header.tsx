import { Link } from 'react-router-dom';
import './Header.scss';

const pages = ['HOME', 'PHONES', 'TABLETS', 'ACCESSORIES'];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="nav-and-logo">
        <Link to='/home' className="logo">
          <img
            src="/ui/Logo.svg"
            alt="Nice Gadgets logo"
            className="logo-img"
          />
        </Link>

        <nav className="nav">
          <ul className="nav__list">
            {pages.map(page => (
              <li className='nav__item' key={page}>
                <Link className='nav__link' to={page.toLowerCase()}>
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
            <img src="ui/Menu.svg" alt="burger-icon" />
          </a>
        </div>
        <div className="side-button side-button--favourites">
          <a href="#">
            <img
              src="ui/favourites.svg"
              alt="favourites-icon"
            />
          </a>
        </div>
        <div className="side-button side-button--cart">
          <a href="#">
            <img
              src="ui/cart.svg"
              alt="cart-icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
}