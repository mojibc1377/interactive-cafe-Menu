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
    <>
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
    <nav className={sideBar ? 'nav-menu active' : 'nav-menu'} >
        <ul className = 'nav-menu-items' onClick={showSideBar}>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item, index)=>{
                return(
                    <li key = {index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span className='itemTitle'>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
        <span className='header--title' >کافه فلو</span>
        <div className='devName'>Moji-Bc</div>
    </nav>
    </IconContext.Provider>
    </>
      )
}

export default Sidebar;