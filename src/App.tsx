import { FC, useEffect } from 'react';
import './styles/index.scss';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { UserMessage, massageList } from './components/UserMessage/UserMessage';
import { useAppContext } from './context/AppContext';

const App: FC = () => {
  const { message } = useAppContext();

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
        {message && <UserMessage message={message} />}
        <Breadcrumbs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
