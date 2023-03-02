import * as React from 'react';
import OrderShower from './oders';
import Navbar from './category';
import juiceData from '../data/juiceData';
export default function Juices(){
    const juices = juiceData.map(item=>{
  
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
            {juices}
        </div>
      </>
    )
}