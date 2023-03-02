import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function Navbar(props){

    return(
            <nav className="nav" >
                <ul id="list">
                    
                    
                    <CustomLink to='/smoothie'>{props.cat}</CustomLink>

                    <CustomLink to='/juice'>{props.cat2}</CustomLink>

                    <CustomLink to='/shake'>{props.cat3}</CustomLink>

                    <CustomLink to='/cocktails'>{props.cat4}</CustomLink>



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