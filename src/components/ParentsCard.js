import React from 'react'
import { Container, Image } from 'semantic-ui-react'


const ParentsCard = ({image, numOfPets, serviceYears}) => {
  return (
    <Container className ="card">
        <Image className='cardImage' src={image} alt={"Parent"} />
        <h3>Number of Pets: {numOfPets}</h3>
        <h3>Years of Service: {serviceYears}</h3>
    </Container>
  )
}

export default ParentsCard