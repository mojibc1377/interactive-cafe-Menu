import * as React from 'react';
// import BasicPopover from './popover';

function OrderShower(props){
    const [card, setCard] = React.useState(true)
    function flipper (){
        setCard(card => !card)
    }
    return(

            <div>
                <div className={card ? "order" : "order-magnified"} typeof='button' onClick={flipper}>
                    <img className={card ? "order--pic" : "order--pic-magnified"} src={props.img} alt="order" />
                    <div className={card ? "order--info" : "order--info-magnified"}>
                        <div className={card ? "order--info" : "order--info-magnified"}>
                            <span className={card ? "order--name" : "order--name-magnified"}>{props.name}</span>
                            <span className={card ? "order--price" : "order--price-magnified"}>{props.price}</span>
                            <div className='order--ingridients display-linebreak'>{card ? "" :`: توضیحات‌ ${props.description}`}</div>
                        </div>
                        
                    </div>
                    
                </div>  
            </div>
       
    )
}
export default OrderShower;