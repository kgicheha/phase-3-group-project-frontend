import {React} from 'react'
import { Link } from 'react-router-dom'
import { Image, Button } from 'semantic-ui-react'


const ParentsCard = ({name, image, numOfPets, serviceYears, setID, id, setS_P}) => {
  
  function handleClick()
  {
    setS_P("parents");
    setID(id);
  }

  return (
    <div className ="card" align ="center">
        <Image className='cardImage' src={image} alt={name} />
        <h3>{name}</h3>
        <h3>Companions At Home: {numOfPets}</h3>
        <h3>Years Working With Us: {serviceYears}</h3>
        <h3>Pets Sponsoring: </h3>
        <Link to={`/parents/${id}/pets`}><Button onClick ={handleClick}>Pets</Button></Link>
    </div>
  )
}

export default ParentsCard
