import React from 'react'
import { NavLink } from 'react-router-dom'


const Shelters = ({name, image, location, hours, no_kill, id, setS_P, setID}) => {

  function handleClick()
  {
    setID(id);
    setS_P("shelters");
  }

  return (
    
    <div className='Shelter'>
        <img src={image} alt={"Shelter"}/>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Hours: {hours}</h3>
        <h3>Type: {no_kill ? "No-Kill Shelter" : "Traditional Shelter"}</h3>
        <button onClick ={handleClick}><NavLink to={`/shelters/${id}/pets`}>Pets</NavLink></button>
        <button onClick ={handleClick}><NavLink to={`/shelters/${id}/parents`}>Parents</NavLink></button>
    </div>
  )
}

export default Shelters
