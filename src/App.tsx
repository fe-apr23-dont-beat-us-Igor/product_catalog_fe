import { FC } from 'react';
import './styles/index.scss';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Dropdown from './components/Dropdown/Dropdown';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
      <Dropdown />
    </div>
  );
};

export default App;
