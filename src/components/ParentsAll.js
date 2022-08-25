
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

  const parentCardData = parents.map((parent) => (
    <ParentsCard
      key = {parent.id}
      parent_id = {parent.id}
      image ={parent.image_url}
      name = {parent.name}
      numOfPets = {parent.current_num_pets}
      serviceYears = {parent.service_years}
    />
  ))
  
    return (
      <div>
        {parentCardData}
      </div>
    )
  }

export default ParentsAll