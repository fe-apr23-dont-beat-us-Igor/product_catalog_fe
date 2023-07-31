import { FC } from 'react';
import Slider from '../components/slider/Slider';

const Home: FC = () => {
  return (
    <main className="container section">
      <h1>Welcome to Nice Gadgets store!</h1>
      <Slider />
      {/* <NewPhonesCollection /> */}
      {/* <Category /> */}
      {/* <NewPhonesCollection /> */}
    </main>
  );
};

export default Home;
