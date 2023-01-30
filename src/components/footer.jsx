import * as React from 'react';
import * as AiIcons from "react-icons/ai"
import { IconContext } from 'react-icons';

export default function Footer(){
    return(
        <div className='footer'>
            <IconContext.Provider value={{color:'#c5c6c7'}}>
                <div className='footer--obj'>
                    <AiIcons.AiOutlineClockCircle className = "footer--obj--logo"values={{color : "fff"}}/><span className='footer--obj--text'>ساعت کاری</span>
                    <div className='footer--obj--text'> 8:00 / 23:59</div>
                </div>
                <div className='footer--obj'>
                    <AiIcons.AiOutlineClockCircle className = "footer--obj--logo"values={{color : "fff"}}/><span className='footer--obj--text'>ساعت کاری</span>
                    <div className='footer--obj--text'> 8:00 / 23:59</div>
                </div>
                <div className='footer--obj'>
                    <AiIcons.AiOutlineClockCircle className = "footer--obj--logo"values={{color : "fff"}}/><span className='footer--obj--text'>ساعت کاری</span>
                    <div className='footer--obj--text'> 8:00 / 23:59</div>
                </div>
            </IconContext.Provider>
        </div>
    )
}