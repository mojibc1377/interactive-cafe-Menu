import * as React from 'react';
import BurgersData from '../BurgersData';
import OrderShower from '../components/oders';
import foodData from '../foodData';
export default function Food(){
    const Pizzas = foodData.map(item=>{
  
        return(
          <OrderShower
            key={item.id}
            {...item}
            />
            );
          }
        )
        
      const burgers = BurgersData.map(item=>{
  
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
      <p4 className="order--title">Pizzas</p4>
      <div className='order--card'>
          {Pizzas}
          
      </div>
     
      <p4 className="order--title">Burgers</p4>
      <div className='order--card'>
          {burgers}
          
      </div>
      </div>
    )
}