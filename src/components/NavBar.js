import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';


function NavBar () {
  return (
   <>
   <div id = "logo">
    <img src={require("../Assets/logo.png")} alt="Logo" height="200"/>
    </div>
    <div id='navBar'>
    <Button.Group attached={true}>
    <Link to="/"><Button size='big'>Home</Button></Link>
    <Link to="/shelters"><Button size='big'>Shelters</Button></Link>
    <Link to="/parents"><Button size='big'>Parents</Button></Link>
    <Link to="/pets"><Button size='big'>Pets</Button></Link>
    </Button.Group>
    </div>
   </>
  )
}

export default NavBar

