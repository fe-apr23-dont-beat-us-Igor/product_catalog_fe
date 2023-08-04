import { FC } from 'react';
import GoodsSliderCollection from '../components/GoodsSliderCollection/GoodsSliderCollection';
import Categories from '../components/Categories/Categories';
import Slider from '../components/Slider/Slider';

const Home: FC = () => {
  return (
    <main className="">
      <h1 className="header-margin section container">
        Welcome to Nice Gadgets store!
      </h1>
      <Slider />
      <GoodsSliderCollection />
      <Categories />
      <GoodsSliderCollection />
    </main>
  );
};

export default Home;
