import React from 'react'
import { FaArrowAltCircleLeft , FaArrowAltCircleRight } from 'react-icons/fa'
import sliderData from './sliderData'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = React.useState(0)
    const length = slides.length
    const delay = 5000;
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
    React.useEffect(() => {
      resetTimeout();

      timeoutRef.current = setTimeout(
        () =>
            setCurrent((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
        // eslint-disable-next-line no-unreachable
        resetTimeout();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [current]);
    
    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null
    }
    const nextSlide = () => {
        setCurrent (current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent (current === 0 ? length -1 : current - 1 )
    }
    return (
   <section className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>

       {sliderData.map((slide, index)=>{
        return(
            <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && (<img className="image" src={slide.src} alt='slide' />)}
            </div>
        )
   })}
   </section>
  )
}

export default ImageSlider
