import React from 'react'

const ParentsCard = ({image, numOfPets, serviceYears}) => {
  return (
    <div>
        <img src={image} alt={"Parent"} width={300}/>
        <h3>Number of Pets: {numOfPets}</h3>
        <h3>Years of Service: {serviceYears}</h3>
    </div>
  )
}

export default ParentsCard