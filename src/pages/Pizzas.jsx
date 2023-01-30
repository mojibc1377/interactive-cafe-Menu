import * as React from 'react';
import OrderShower from '../components/oders';
import pizzaData from '../pizzaData';
import Navbar from '../components/category';

export default function Pizza(){
      const pizzas = pizzaData.map(item=>{
  
          return(
            <OrderShower
              key={item.id}
              {...item}
              />
              );
            }
          )
    return(
        
      <div>
      <Navbar/>

      <p4 className="order--title">Pizzas</p4>
      <div className='order--card'>
          {pizzas}
          
      </div>
      </div>
    )
}