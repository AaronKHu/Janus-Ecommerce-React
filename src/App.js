import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';
import Marketing from './components/Marketing/Marketing';
import Visuals from './components/Visuals/Visuals';
import End from './components/End/End';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collection />
      <Marketing />
      <Visuals />
      <End />
    </div>
  );
}

export default App;
