import { FC, useState } from 'react';
import './styles/index.scss';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      {/* <BurgerMenu /> */}
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
