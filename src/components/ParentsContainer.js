
import React, {useState, useEffect} from 'react'
import ParentsCard from './ParentsCard';


const ParentsContainer = ({id}) => {

    const [parents, setParents] = useState([])

    useEffect(()=>{
     
        fetch(`http://localhost:9292/shelters/${id}/parents`)
        .then(res => res.json())
        .then(data => {
          setParents(data)
        })
         // eslint-disable-next-line
    },[]);

console.log(parents)

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

export default ParentsContainer