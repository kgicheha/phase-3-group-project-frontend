import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';


function NavBar () {
  return (
   <>
    <img id="logo" src={require("../Assets/logo.png")} alt="Logo" height="125"/>
    <div className='navBar'>
    <Button.Group attached={true}>
    <Link to="/"><Button>Home</Button></Link>
    <Link to="/shelters"><Button>Shelters</Button></Link>
    <Link to="/parents"><Button>Parents</Button></Link>
    <Link to="/pets"><Button>Pets</Button></Link>
    </Button.Group>
    </div>
   </>
  )
}

export default NavBar

