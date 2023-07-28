import { FC } from 'react';
import './App.css';
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
