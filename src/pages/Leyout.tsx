import { FC } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

const Leyout: FC = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Leyout;
