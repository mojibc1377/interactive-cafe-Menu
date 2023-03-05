import './App.css';
import Home from './pages/Home';
import ColdDrinks from './pages/Drinks';
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
import Footer from './components/footer';
import Cocktails from './components/Cocktails'
import Juices from './components/juice';
import Shake from './components/Shake';
import Sandwiches from './pages/Sandwich';
import Shop from './pages/shop';
function App() {
  return (
    
    <div className="App" >
      
      <Header/>
      <ContactUs/>
      <Description/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/juice' element={<Juices/>}/>
        <Route path='/coldDrinks' element={<ColdDrinks/>}/>
        <Route path='/cakes' element={<Cakes/>}/>
        <Route path='/espressoBar' element={<EspressoBar/>}/>
        <Route path='/smoothie' element={<Smoothie/>}/>
        <Route path='/brewingBar' element={<BrewBar/>}/>
        <Route path='/hotDrinks' element={<HotDrinks/>}/>
        <Route path='/cocktails' element={<Cocktails/>}/>
        <Route path='/shake' element={<Shake/>}/>
        <Route path='/sandwich' element={<Sandwiches/>}/>
        <Route path='/shop' element={<Shop/>}/>

      </Routes>
      <Pishnahadi/> 
      <Footer/>
      

        
      
    </div>
  );
}


export default App;
