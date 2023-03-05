import * as React from 'react';
import OrderShower from '../components/oders';
import HotDrinksData from '../data/HotDrinksData';

export default function Shop(){
    const shop = HotDrinksData.map(item=>{
  
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
            {shop}
        </div>
        </>
    )
}