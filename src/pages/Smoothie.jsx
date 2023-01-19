import * as React from 'react';
import smoothieData from '../smoothieData';
import OrderShower from '../components/oders';
export default function Smoothie(){
    const foods = smoothieData.map(item=>{
  
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