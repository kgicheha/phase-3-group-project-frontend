import React, {useState, useEffect} from 'react'
import PetsCard from "./PetsCard"

const PetsAll = ({setID}) => {

    const [pets, setPets] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/pets`)
        .then(res => res.json())
        .then(data => setPets(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
    {
      pets.map((pet) => (
        <PetsCard
          key = {pet.id}
          image ={pet.image_url}
          name = {pet.name}
          id ={pet.id}
          setID ={setID}
        />
        
      ))
    }
    </div>
  )

}

export default PetsAll
