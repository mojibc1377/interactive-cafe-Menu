import * as React from 'react';
import brewBarData from '../data/brewBarData';
import OrderShower from '../components/oders';
export default function EspressoBar(){
    const brewed = brewBarData.map(item=>{
  
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
      <span className='categoryDescription'>نوعی قهوه که با فشار زیاد آب از طریق دانه های آسیاب شده قهوه تهیه می‌شود </span>
      <div className='order--card'>
          {brewed}
      </div>
      </>
    )
}