import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from 'semantic-ui-react';


function NavBar () {
  return (
   <div>
    <img id="logo" src={require("../Assets/logo.png")} alt="Logo" height="125"/>

    <Button.Group attached={true}>
    <Button><NavLink to="/">Home</NavLink></Button>
    <Button><NavLink to="/shelters">Shelters</NavLink></Button>
    <Button><NavLink to="/parents">Parents</NavLink></Button>
    <Button><NavLink to="/pets">Pets</NavLink></Button>
    </Button.Group>
    
   </div>
  )
}

export default NavBar

