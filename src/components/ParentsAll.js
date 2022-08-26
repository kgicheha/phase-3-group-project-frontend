
import React, {useState, useEffect} from 'react'
import ParentsCard from './ParentsCard';


const ParentsAll = ({setID, setS_P, iD}) => {

  const [parents, setParents] = useState([])

  useEffect(()=>{
      fetch(`http://localhost:9292/parents`)
      .then(res => res.json())
      .then(data => {setParents(data)})
  },[]);


  return (
    <div className='Container'>
      {parents.map((parent) => (
        <ParentsCard
          key = {parent.id}
          id = {parent.id}
          image ={parent.image_url}
          name = {parent.name}
          numOfPets = {parent.current_num_pets}
          serviceYears = {parent.service_years}
          setID={setID}
          setS_P={setS_P}
          iD = {iD}
        />
      ))}
    </div>
  )
  }

export default ParentsAll
