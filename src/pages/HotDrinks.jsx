import * as React from 'react';
import OrderShower from '../components/oders';
import foodData from '../foodData';

export default function HotDrinks(){
    const foods = foodData.map(item=>{
  
        return(
          <OrderShower
            key={item.id}
            {...item}
            />
            );
          }
        )
        
    return(
        
        <div className='order--card'>
            {foods}
        </div>
    )
}