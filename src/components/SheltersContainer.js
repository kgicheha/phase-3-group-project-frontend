import React, {useState, useEffect} from 'react'
import Shelters from './Shelters';

const SheltersContainer = ({setS_P, setID}) => {

  const [shelters, setShelters] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/shelters`)
    .then(res => res.json())
    .then(data => {setShelters(data)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div className='ShelterContainer'>
    {
      shelters.map((shelter) => (
        <Shelters
          key = {shelter.id}
          name = {shelter.name}
          image = {shelter.image_url}
          location = {shelter.location}
          hours = {shelter.hours}
          no_kill = {shelter.no_kill}
          id = {shelter.id}
          setID ={setID}
          setS_P ={setS_P}
           /> 
      ))
    }
    </div>
  )
}

export default SheltersContainer
