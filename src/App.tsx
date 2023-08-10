import { FC, useState } from 'react';
import './styles/index.scss';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { UserMessage } from './components/UserMessage/UserMessage';

const App: FC = () => {
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
