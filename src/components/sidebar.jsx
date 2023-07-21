import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import { SidebarData } from '../data/SidebarData'
import { IconContext } from 'react-icons'

function Sidebar() {
    const[sideBar, setSideBar] = React.useState(false)
    const showSideBar =() => setSideBar(!sideBar)
  return (
    < div className=' ps-4'>
    <IconContext.Provider value={{color:'#b9cad8'}}>
      <div className='sidebar'>
        <Link to="#" className='menu-bars'>
            <ul className=''>
                <IconContext.Provider value={{color:'#FFDC00'}}>
                    <RiIcons.RiMenuUnfoldLine onClick={showSideBar} />
                </IconContext.Provider>
            </ul>
        </Link>
    </div>
    <nav className={sideBar ? 'nav-menu active ps-4' : 'nav-menu ps-4'} >
        <ul className = 'nav-menu-items' onClick={showSideBar}>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose className=' mt-8 ml-3'/>
                </Link>
            </li>
            {SidebarData.map((item, index)=>{
                return(
                    <li key = {index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span className='itemTitle text-base'>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
        
    </nav>
    </IconContext.Provider>
    </div>
      )
}

export default Sidebar;