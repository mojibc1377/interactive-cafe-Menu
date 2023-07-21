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
        <div className="order lg:w-40 w-40" typeof="button" onClick={flipper}>
          {loading ? (
            <div className="loading-placeholder" />
          ) : (
            <img className="order--pic" src={props.img} alt="order" />
          )}
          <div className="order--info">
            <div className="order--info">
              <p className="order--name">{props.name}</p>
              <p className="order--price">{props.price}</p>
            </div>
          </div>
        </div>
      </div>
      {card && (
        <div className="backdrop" onClick={() => setCard((prevCard) => !prevCard)}>
            <div className="product-modal lg:w-72">
                <div className="order" typeof='button' onClick={flipper}>
                    <img className="order--pic--modal" src={props.img} alt="order" />
                        <div className="order--info">
                        <div className="order--info-modal flex flex-col h-fit" >
                            <p className="order--name" >{props.name}</p>
                            <p className="order--price" >{props.price}</p>
                            <p className='order--description' >{props.description}</p>
                        </div>
                        </div>
                </div>           
            </div>
        </div>
      )}
    </>
  );
}

export default OrderShower;
