import * as React from 'react';
// import BasicPopover from './popover';

function OrderShower(props){
    const [card, setCard] = React.useState(false)
    function flipper (){
        setCard(card => !card)
    }
    return(
<>
            <div>
                <div className="order" typeof='button' onClick={flipper}>
                    <img className="order--pic" src={props.img} alt="order" />
                    <div className="order--info">
                        <div className="order--info" >
                            <span className="order--name" >{props.name}</span>
                            <span className="order--price" >{props.price}</span>
                        </div>
                    </div>
                </div>  
            </div>
            {card && (
                    <div className='backdrop' onClick={()=>{
                        setCard(card => !card)
                    }}>
                        <div className='product-modal'>
                            {/* <div className='modal-content'> */}
                                {/* <div className="order--modal" typeof='button' onClick={flipper}>
                                    <img className="order--pic--modal" src={props.img} alt="order" />
                                    <div className='info--modal'>
                                    <p className="order--name--modal" >{props.name}</p>
                                    <p className="order--price--modal" >{props.price}</p>
                                    </div>
                                </div>   */}
                                <div className="order" typeof='button' onClick={flipper}>
                                    <img className="order--pic--modal" src={props.img} alt="order" />
                                    <div className="order--info">
                                        <div className="order--info" >
                                            <span className="order--name" >{props.name}</span>
                                            <span className="order--price" >{props.price}</span>
                                            <span className='order--description' >{props.description}</span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        {/* </div> */}
                    </div>
                )}
</>
    )
}
export default OrderShower;