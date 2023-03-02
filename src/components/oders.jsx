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
                            <div className='order--ingridients'>{card ? "" :`${props.description}`}</div>
                        </div>
                        {/* <div className={card ? "order--info hidden" : "order--info hidden magnified"}>
                            <BasicPopover description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "/>    
                        </div> */}
                    </div>
                    
                </div>  
            </div>
       
    )
}
export default OrderShower;