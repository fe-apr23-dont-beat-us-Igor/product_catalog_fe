import { FC } from 'react';
import './App.css';

import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Footer/>

import { Header } from './components/Header/Header';
import Slider from './components/slider/Slider';

const App: FC = () => {
  return (
    <div className="App">
        <Header />
        <Slider />
    </div>
  );
};

export default App;
