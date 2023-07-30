import { FC } from 'react';
import './Footer.scss';

export const Footer: FC = () => {
  return (
    <footer className='page__section footer section'>
      <div className='container'>
        <div className='footer__content'>
          <a href='/' className='footer__logo'>
            <img 
              src="/images/logo.svg"
              alt="Nice Gadgets logo"
              className='footer__logo-pic'
            />
          </a>
          <nav className='footer__links'>
            <ul className='list'>
              <li className='list-item'>
                <a href='/' className='list-link'>GitHub</a>
              </li>
              <li className='list-item'>
                <a href='/' className='list-link'>Contacts</a>
              </li>
              <li className='list-item'>
                <a href='/' className='list-link'>Rights</a>
              </li>
            </ul>
          </nav>
          <div className='footer__moveTop'>
            <div className='back-to-top'>
              Back to top
              <a href='#' className='back-to-top__button'>
                <img 
                  src='/images/arrow-up.svg' 
                  alt='Move Top' 
                  className='back-to-top__pic'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};