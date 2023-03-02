import * as React from 'react';
import OrderShower from '../components/oders';
import cakesData from '../data/cakesData';


export default function EspressoBar(){
    const cakes = cakesData.map(item=>{
  
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
          {cakes}
      </div>
      </>
    )
}