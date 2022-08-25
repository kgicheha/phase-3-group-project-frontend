import React, {useState, useEffect} from 'react'
import Pets from './Pets';

const PetsContainer = ({id, s_p}) => {

    const [pets, setPets] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/${s_p}/${id}/pets`)
        .then(res => res.json())
        .then(data => {
            setPets(data)
      }) 
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
      <div>{
      pets.map((pet) => (
        <Pets
          key = {pet.id}
          name = {pet.name}
          image = {pet.image_url}
        />
      ))
      }</div>
    )
}

export default PetsContainer