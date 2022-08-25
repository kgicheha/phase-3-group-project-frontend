
import React, {useState, useEffect} from 'react'
import ParentsCard from './ParentsCard';

const ParentsAll = () => {

    const [parents, setParents] = useState([])

    useEffect(()=>{
        fetch('http://localhost:9292/parents')
        .then(res => res.json())
        .then(data => {
          setParents(data)
        })
    },[]);

  return (
    <div>
    {
      parents.map((parent) => (
        <ParentsCard
          key = {parent.id}
          image ={parent.image_url}
          numOfPets = {parent.current_num_pets}
          serviceYears = {parent.service_years}
        />
      ))
    }
    </div>
  )
}

export default ParentsAll