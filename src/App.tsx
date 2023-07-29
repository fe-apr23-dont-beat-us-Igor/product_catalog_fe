import { FC } from 'react';
import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Slider from './components/slider/Slider';
import { SliderProvider } from './components/slider/SliderContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Slider />

      {/* <Footer /> */}
    </div>
  );
};

export default App;
