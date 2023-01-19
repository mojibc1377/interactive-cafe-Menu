import * as React from 'react';

function OrderShower(props){
    
    return(
       
        <div >
            <div className='order'>
                <img className="order--pic" src={props.img} alt="order" />
                <div className='order--info'>
                    <span className='order--name'>{props.name}</span>
                    <span className='order--price'>{props.price}</span>
                </div>
            </div>  
        </div>
       
    )
}

export default OrderShower;