import * as React from 'react';
import OrderShower from '../components/oders';
import sandwichData from '../data/sandwichData';
export default function Sandwiches(){
    const sandwich = sandwichData.map(item=>{
  
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
      <hr className='line'></hr>

      <div className='order--card'>
          {sandwich}
      </div>
      </>
    )
}