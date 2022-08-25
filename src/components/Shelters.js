import React from 'react'
import { NavLink } from 'react-router-dom'


const Shelters = ({name, image, location, hours, no_kill, id}) => {
  return (
    <div>
        <img src={image} alt={"Shelter"}/>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Hours: {hours}</h3>
        <h3>Type: {no_kill ? "No-Kill Shelter" : "Traditional Shelter"}</h3>
        <button><NavLink to={`/shelters/${id}/pets`}exact>Pets</NavLink></button>
        <button><NavLink to={`/shelters/${id}/parents`}exact>Parents</NavLink></button>
    </div>
  )
}

export default Shelters