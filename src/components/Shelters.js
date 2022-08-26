import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image, Button } from 'semantic-ui-react';

const Shelters = ({name, image, location, hours, no_kill, id, setS_P, setID}) => {

  function handleClick()
  {
    setID(id);
    setS_P("shelters");
  }

  return (
    
    <div className='card'>
        <Image src={image} alt={"Shelter"}/>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Hours: {hours}</h3>
        <h3>Type: {no_kill ? "No-Kill Shelter" : "Traditional Shelter"}</h3>
        <NavLink to={`/shelters/${id}/pets`}><Button onClick ={handleClick}>Pets</Button></NavLink>
        <NavLink to={`/shelters/${id}/parents`}><Button onClick ={handleClick}>Parents</Button></NavLink>
    </div>
  )
}

export default Shelters
