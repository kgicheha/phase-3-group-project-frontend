import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const PetsCard = ({image, name, setID, id}) => {
  
  const handleClick=()=>setID(id);
 
  return (
    <div className='card'>
        <img src={image} className="image" width={200} alt={name}/>
        <h3>{name}</h3>
        <Link to={`/pet/${id}`}><Button onClick={handleClick}>Sponsor me!</Button></Link>
    </div>
  )
}


export default PetsCard
