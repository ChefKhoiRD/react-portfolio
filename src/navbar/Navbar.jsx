// Imports
import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
            <div className = 'navbar'>
                <div className = 'navbar-name'> 
                    <h1 className = 'navbar-name'> Khoi Vu  </h1>
                    <h3 className = 'navbar-name-title'> / Full Stack Web Developer </h3>
                </div>
            
            <ul className = 'navbar-items'>

                <Link to = "/" style = {{textDecoration: 'none'}}> 
                    <li> Home </li> 
                </Link>

                <Link to = "/about" style = {{textDecoration: 'none'}}> 
                    <li> About </li> 
                </Link>

                <Link to = "/projects" style = {{textDecoration: 'none'}}>
                    <li> Projects </li> 
                </Link>

                <Link to = "/contact" style = {{textDecoration: 'none'}}>
                    <li> Contact </li>
                </Link>

            </ul>
        </div>
    )
};

// Export
export default Navbar;