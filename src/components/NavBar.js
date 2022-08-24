import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <img alt="Logo"></img>
        <span
            id="home" to="/">Home
        </span>
        <span
          id="about-us" to= "/about"> About
        </span>
    </div>
  )
}

export default NavBar