import React from 'react'

const PetsCard = ({image, name}) => {
  return (
    <div>
        <img src={image} width={200} alt={name}/>
        <h3>{name}</h3>
    </div>
  )
}

export default PetsCard