import React, {useState, useEffect} from 'react'
import Shelters from './Shelters';

const SheltersContainer = () => {

  const [shelters, setShelters] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/shelters`)
    .then(res => res.json())
    .then(data => {setShelters(data)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

console.log(shelters)

  return (
    <div>
    {
      shelters.map((shelter) => (
        <Shelters
          key = {shelter.id}
          name = {shelter.name}
          image = {shelter.image_url}
          location = {shelter.location}
          hours = {shelter.hours}
          no_kill = {shelter.no_kill}
          id = {shelter.id} /> 
      ))
    }
    </div>
  )
}

export default SheltersContainer