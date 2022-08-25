import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar () {
  return (
   <div>
    <button><NavLink to="/"exact>
      Home
    </NavLink></button>
    
    <button><NavLink to="/shelters"exact>
      Shelters
    </NavLink></button>

    <button><NavLink to="/parents"exact>
      Parents
    </NavLink></button>
    <button><NavLink to="/pets"exact>
      Pets
    </NavLink></button>
    
    
   </div>
  )
}

export default NavBar

// <img
// id="logo"
// src={require("../Assets/logo.png")}
// alt="Logo"
// height="125"
// />