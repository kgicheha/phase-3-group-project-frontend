import React from 'react'
import { Link } from 'react-router-dom';

const PetsCard = ({image, name, setID, id}) => {
  
  const handleClick=()=>setID(id);
 
  return (
    <div>
        <img src={image} width={200} alt={name}/>
        <h3>{name}</h3>
        <button onClick={handleClick}><Link to={`/pet/${id}`}>Sponsor me!</Link></button>
    </div>
  )
}


export default PetsCard
