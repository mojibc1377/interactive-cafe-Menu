import * as React from 'react';
import smoothieData from '../data/smoothieData';
import OrderShower from '../components/oders';
import Navbar from '../components/category';
export default function Smoothie(){
    const smoothie = smoothieData.map(item=>{
  
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

        <Navbar
          cat ='اسموتی'
          cat2 = 'ابمیوه'
          cat3 = 'شیک'
          cat4 ='کوکتل'
        />
        <div className='order--card'>
            {smoothie}
        </div>
      </>
    )
}