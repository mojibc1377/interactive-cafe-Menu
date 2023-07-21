import React, { useState, useEffect } from 'react';

function OrderShower(props) {
  const [card, setCard] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 4-second loading time
    const timer = setTimeout(() => setLoading(false), 4000);

    return () => clearTimeout(timer);
  }, []);

  function flipper() {
    setCard((prevCard) => !prevCard);
  }

  return (
    <>
      <div>
        <div className="order" typeof="button" onClick={flipper}>
          {loading ? (
            <div className="loading-placeholder" />
          ) : (
            <img className="order--pic" src={props.img} alt="order" />
          )}
          <div className="order--info">
            <div className="order--info">
              <span className="order--name">{props.name}</span>
              <span className="order--price">{props.price}</span>
            </div>
          </div>
        </div>
      </div>
      {card && (
        <div className="backdrop" onClick={() => setCard((prevCard) => !prevCard)}>
            <div className="product-modal">
                <div className="order" typeof='button' onClick={flipper}>
                    <img className="order--pic--modal" src={props.img} alt="order" />
                        <div className="order--info" >
                            <span className="order--name" >{props.name}</span>
                            <span className="order--price" >{props.price}</span>
                            <span className='order--description' >{props.description}</span>
                        </div>
                </div>           
            </div>
        </div>
      )}
    </>
  );
}

export default OrderShower;
