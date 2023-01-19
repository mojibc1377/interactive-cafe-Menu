import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function Navbar(){

    return(
            <nav className="nav" >
                <ul id="list">
            
                    
                    <CustomLink to="/">Home</CustomLink>
                    
                    <CustomLink to='/food'>Food</CustomLink>

                    <CustomLink to='/smoothie'>Smoothie</CustomLink>

                    <CustomLink to='/espressoBar'>EspressoBar</CustomLink>

                    <CustomLink to='/brewingBar'>BrewBar</CustomLink>

                    <CustomLink to='/hotDrinks'>hotDrinks</CustomLink>

                    <CustomLink to='/cake'>Cakes</CustomLink>

                    <CustomLink to='/coldDrinks'>coldDrinks</CustomLink>


                </ul>
            </nav>
    )
    
}
function CustomLink({to, children,  ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path : resolvedPath.pathname})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} > {children} </Link>
        </li>
    )
}

export default Navbar;