import React from 'react'

const ParentsCard = ({image, numOfPets, serviceYears}) => {
  return (
    <div>
      <p>Tesing</p>
        <img src={image} alt="Parent"/>
        <h3>Number of Pets: {numOfPets}</h3>
        <h3>Years of Service: {serviceYears}</h3>
    </div>
  )
}

export default ParentsCard