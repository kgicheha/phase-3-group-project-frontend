import {React} from 'react'
import { Link } from 'react-router-dom'
import { Container, Image } from 'semantic-ui-react'


const ParentsCard = ({name, image, numOfPets, serviceYears, setID, id, setS_P}) => {
  
  function handleClick()
  {
    setS_P("parents");
    setID(id);
  }

  return (
    <Container className ="card" align ="center">
        <Image className='cardImage' src={image} alt={name} />
        <h3>{name}</h3>
        <h3>Number of Pets: {numOfPets}</h3>
        <h3>Years working with us: {serviceYears}</h3>
        <button onClick ={handleClick}><Link to={`/parents/${id}/pets`}>Pets</Link></button>
    </Container>
  )
}

export default ParentsCard
