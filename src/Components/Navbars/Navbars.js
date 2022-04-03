import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbars = () => {
  return (
    <nav>
    <div>
    <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/'>Home</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/review'>Review</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/dashbord'>Dashbord</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/blog'>Blog</NavLink>
    </div>
    
</nav>
          
  );
};

export default Navbars;
