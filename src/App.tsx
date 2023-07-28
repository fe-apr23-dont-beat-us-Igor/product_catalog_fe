import { FC } from 'react';
import './App.css';
import { Header } from './components/Header';

const App: FC = () => {
  return (
    <div className="App">
        <Header />
    </div>
  );
}
const App: React.FC = () => {
  return <div className="App"></div>;
};

export default App;
