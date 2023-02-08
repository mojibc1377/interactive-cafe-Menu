/* eslint-disable no-unused-vars */
import * as React from 'react';

import ImageSlider from '../components/slider';
import sliderData from '../components/sliderData';
export default function Home(){
  
    return(
        <>
        <ImageSlider slides={sliderData}/>
        </>
    )
}
    