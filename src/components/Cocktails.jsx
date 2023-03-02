import * as React from 'react';
import OrderShower from './oders';
import Navbar from './category';
import ColdDrinksData from '../data/ColdDrinksData';
export default function Cocktails(){
    const cocktails = ColdDrinksData.map(item=>{
  
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
            {cocktails}
        </div>
      </>
    )
}