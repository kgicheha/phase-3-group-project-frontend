import React, {useState, useEffect} from 'react'
import PetsCard from './PetsCard';

const PetsContainer = ({iD, s_p, setID}) => {

    const [pets, setPets] = useState([])

    useEffect(()=>{
      fetch(`http://localhost:9292/${s_p}/${iD}/pets`)
      .then(res => res.json())
      .then(data => {setPets(data)}) 
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
      <div className='Container'>{
      pets.map((pet) => (
        <PetsCard
          key = {pet.id}
          name = {pet.name}
          image = {pet.image_url}
          id = {iD}
          setID = {setID}
        />
      ))
      }</div>
    )
}

export default PetsContainer
