import * as React from 'react';
import OrderShower from '../components/oders';
import BurgersData from '../BurgersData';
import Navbar from '../components/category';

export default function Burgers(){
      const burgers = BurgersData.map(item=>{
  
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
        <Navbar/>
      <p4 className="order--title">burgers</p4>
      <div className='order--card'>
          {burgers}
          
      </div>
      </div>
    )
}