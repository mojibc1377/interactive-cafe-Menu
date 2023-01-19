import './App.css';
import Navbar from './components/category';
import Home from './pages/Home';
import ColdDrinks from './pages/Drinks';
import Food from './pages/Food';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cakes from './pages/Cakes';
import EspressoBar from './pages/EspressoBar';
import Smoothie from './pages/Smoothie';
import BrewBar from './pages/BrewingCoffee';
import HotDrinks from './pages/HotDrinks';
import ContactUs from './components/contactUs';
import Description from './components/Lorem';
import Pishnahadi from './components/Pishnahadi';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <ContactUs/>
      <Description/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/cake' element={<Cakes/>}/>
        <Route path='/espressoBar' element={<EspressoBar/>}/>
        <Route path='/smoothie' element={<Smoothie/>}/>
        <Route path='/brewingBar' element={<BrewBar/>}/>
        <Route path='/hotDrinks' element={<HotDrinks/>}/>
        <Route path='/coldDrinks' element={<ColdDrinks/>}/>
      </Routes>
      <Pishnahadi/>
    </div>
  );
}

export default App;
