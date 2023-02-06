import React from 'react'
import sliderData from './sliderData'

const ImageSlider
 = () => {
  return (
   <>
   {sliderData.map((slide, index)=>{
        return(
            <img  className="slides" src={slide.src} alt='slide' />
        )
   })}
   </>
  )
}

export default ImageSlider
