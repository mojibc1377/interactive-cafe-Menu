import * as React from 'react';
import pishnahad from '../pishnahad';
import OrderShower from './oders';

export default function Pishnahadi(){
    const pishnahadi = pishnahad.map(item=>{
  
        return(
            
          <OrderShower
            key={item.id}
            {...item}
            />
            );
          }
        )
        return(
            <div>
            <p4 className="order--title">پیشنهادی ها</p4>
            <div className='order--card'>
                {pishnahadi}
            </div>
            </div>
        )
}