import * as React from 'react';
import OrderShower from '../components/oders';
import HotDrinksData from '../data/HotDrinksData';

export default function HotDrinks(){
    const hotDrink = HotDrinksData.map(item=>{
  
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
            {hotDrink}
        </div>
        </>
    )
}