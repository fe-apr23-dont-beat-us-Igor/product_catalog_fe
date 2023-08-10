import { FC, useEffect } from 'react';
import './styles/index.scss';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { UserMessage } from './components/UserMessage/UserMessage';

const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Піднімаємо сторінку догори при переході на нову сторінку
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Додати атрибут до <body> під час монтування компонента
    document.body.setAttribute('darktheme', 'true');

    // Прибрати атрибут з <body> під час розмонтування компонента
    return () => {
      document.body.removeAttribute('darktheme');
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <UserMessage />
        <Breadcrumbs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
