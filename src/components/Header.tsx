import './Header.css';

const pages = ['HOME', 'PHONES', 'TABLETS', 'ACCESSORIES'];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="nav-and-logo">
        <a href="#" className="logo">
          <img
            src="/ui/Logo.svg"
            alt="Nice Gadgets logo"
            className="logo-img"
          />
        </a>

        <nav className="nav">
          <ul className="nav__list">
            {pages.map(page => (
              <li className='nav__item' key={page}>
                <a className='nav__link' href="#">
                  {page}
                </a>
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