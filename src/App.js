import './App.css';
import Navigation from './component/navigation';
import { BrowserRouter } from 'react-router-dom';
import CarouselFadeExample from './component/MainCarosel';
import InteriorTrend from './component/InterirorTrend';
import ConstructionExample from './component/ConstructionExample';
import NeighborInterior from './component/NeighborInterior';
import OnlineQuote from './component/OnlineQuote';

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <CarouselFadeExample/>
        <InteriorTrend/>
        <ConstructionExample/>
        <NeighborInterior/>
        <OnlineQuote/>
    </BrowserRouter>
  );
}

export default App;
