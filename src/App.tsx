import { FC } from 'react';
import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { Card } from './components/Card';
import { Outlet } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
