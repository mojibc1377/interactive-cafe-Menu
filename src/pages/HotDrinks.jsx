import * as React from 'react';
import OrderShower from '../components/oders';
import pizzaData from '../pizzaData';
import Navbar from '../components/category';

export default function HotDrinks(){
    const foods = pizzaData.map(item=>{
  
        return(
          <OrderShower
            key={item.id}
            {...item}
            />
            );
          }
        )
        
    return(
        <>
        <Navbar/>
        <div className='order--card'>
            {foods}
        </div>
        </>
    )
}