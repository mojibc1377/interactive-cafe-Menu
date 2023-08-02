import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { SidebarData } from '../data/SidebarData';
import { IconContext } from 'react-icons';

function Sidebar() {
    const [sideBar, setSideBar] = React.useState(false);
  
    const showSideBar = () => setSideBar(!sideBar);
  
    useEffect(() => {
      if (sideBar) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [sideBar]);
  
    useEffect(() => {
      const handleOutsideClick = (e) => {
        const sidebarElement = document.querySelector('.nav-menu');
        const menuBarsButton = document.querySelector('.menu-bars');
  
        if (sidebarElement && !sidebarElement.contains(e.target) && !menuBarsButton.contains(e.target)) {
          setSideBar(false);
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);
  
    return (
      <div className="ps-4">
        <IconContext.Provider value={{ color: '#b9cad8' }}>
          <div className="sidebar">
            <Link to="#" className="menu-bars">
              <ul className="">
                <IconContext.Provider value={{ color: '#FFDC00' }}>
                  <RiIcons.RiMenuUnfoldLine onClick={showSideBar} />
                </IconContext.Provider>
              </ul>
            </Link>
          </div>
          {sideBar && <div className="sidebar-overlay" onClick={showSideBar} />}
          <nav className={sideBar ? 'nav-menu active ps-4' : 'nav-menu ps-4'}>
       
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className=" mt-5 lg:mt-0 lg:h-10 lg:p-0 ml-3" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="itemTitle text-base">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
