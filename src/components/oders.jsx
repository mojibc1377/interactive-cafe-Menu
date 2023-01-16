import * as React from 'react';

function OrderShower(){
    return(
        <div className='order--card'>
            <div className='order'>
                <img className="order--pic" src='/images/icons8-pizza-100.png' alt="order" />
                <br/>
                <span className='order--name'>Name : Pizza</span>
                <span className='order--price'>Price : 20000T</span>
            </div>
            <div className='order'>
                <img className="order--pic" src='/images/icons8-pizza-100.png' alt="order" />
                <br/>
                <span className='order--name'>Name : Pizza</span>
                <span className='order--price'>Price : 20000T</span>
            </div>
            <div className='order'>
                <img className="order--pic" src='/images/icons8-pizza-100.png' alt="order" />
                <br/>
                <span className='order--name'>Name : Pizza</span>
                <span className='order--price'>Price : 20000T</span>
            </div>
            <div className='order'>
                <img className="order--pic" src='/images/icons8-pizza-100.png' alt="order" />
                <br/>
                <span className='order--name'>Name : Pizza</span>
                <span className='order--price'>Price : 20000T</span>
            </div>
        </div>
    )
}
export default OrderShower;