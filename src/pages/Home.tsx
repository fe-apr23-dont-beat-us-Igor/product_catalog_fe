import { FC } from 'react';
import Slider from '../components/Slider/Slider';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import Categories from '../components/Categories/Categories';

const Home: FC = () => {
  return (
    <main className="container section">
      <h1 className="header-margin">Welcome to Nice Gadgets store!</h1>
      <Slider />
      <GoodsSliderCollection />
      <Categories />
      <GoodsSliderCollection />
    </main>
  );
};

export default Home;
