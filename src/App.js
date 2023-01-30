/* eslint-disable no-unused-vars */
import './App.css';
import Navbar from './components/category';
import Home from './pages/Home';
import ColdDrinks from './pages/Drinks';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import Header from './components/Header';
import Cakes from './pages/Cakes';
import EspressoBar from './pages/EspressoBar';
import Smoothie from './pages/Smoothie';
import BrewBar from './pages/BrewingCoffee';
import HotDrinks from './pages/HotDrinks';
import ContactUs from './components/contactUs';
import Description from './components/Lorem';
import Pishnahadi from './components/Pishnahadi';
import Sidebar from './components/sidebar';
import Pizza from './pages/Pizzas';
import Burgers from './pages/burgers';
import Food from './components/Food';
import Footer from './components/footer';

function App() {
  
  return (
    <div className="App">
      
      <Header/>
      <ContactUs/>
      <Description/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pizza' element={<Pizza/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/burgers' element={<Burgers/>}/>
        <Route path='/cake' element={<Cakes/>}/>
        <Route path='/espressoBar' element={<EspressoBar/>}/>
        <Route path='/smoothie' element={<Smoothie/>}/>
        <Route path='/brewingBar' element={<BrewBar/>}/>
        <Route path='/hotDrinks' element={<HotDrinks/>}/>
        <Route path='/coldDrinks' element={<ColdDrinks/>}/>
      </Routes>
      <Pishnahadi/> 
      <Footer/>
      

        
      
    </div>
  );
}


export default App;
