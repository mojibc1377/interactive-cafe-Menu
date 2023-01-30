import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function Navbar(){

    return(
            <nav className="nav" >
                <ul id="list">
                    
                    
                    <CustomLink to='/pizza'>Pizza</CustomLink>

                    <CustomLink to='/burgers'>Burgers</CustomLink>

                    <CustomLink to='/sushi'>Sushi</CustomLink>

                    <CustomLink to='/salad'>Salad</CustomLink>

                    <CustomLink to='/pishQaza'>pishQaza</CustomLink>

                    <CustomLink to='/khorak'>khorak</CustomLink>


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