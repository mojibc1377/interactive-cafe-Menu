import * as React from 'react';
import espressoData from '../espressoData';
import OrderShower from '../components/oders';

export default function EspressoBar(){
    const espresso = espressoData.map(item=>{
  
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
            {espresso}
        </div>
    )
}