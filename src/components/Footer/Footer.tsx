import { FC } from 'react';
import { img } from '../../images/images';
import { moveTop } from '../utils/moveTop';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__content container'>
        <a href='/' className='footer__logo'>
          <img 
            src={img.logo}
            alt="Nice Gadgets logo"
            className='footer__logo-pic'
          />
        </a>
        <nav className='footer__links'>
          <ul className='list'>
            <Link className='list-item list-link' to="https://github.com/fe-apr23-dont-beat-us-Igor" target="_blank">
              GitHub
            </Link>
            <Link className='list-item' to="/contacts">
              <a href='/' className='list-link'>Contacts</a>
            </Link>
            <li className='list-item'>
              <a href='/' className='list-link'>Rights</a>
            </li>
          </ul>
        </nav>
        <div className='footer__moveTop'>
          <div className='back-to-top'>
            Back to top
            <a
              onClick={moveTop} 
              className='back-to-top__button'
            >
              <img 
                src={img.arrowRightLarge}
                alt='Move Top'
                className='back-to-top__pic'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};