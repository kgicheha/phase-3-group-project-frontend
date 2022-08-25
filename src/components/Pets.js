import React, { useState } from 'react';

function Pets({name, image, description}) {
  const [isFund, setAsFoster] = useState(false);

  function handleClick() {
    setAsFoster((isFund) => !isFund);    
  }

  return (
    <div>
        <img src={image} alt="pet" width={300}/>
        <h3>name: {name}</h3>
        <p>description: {description}</p>
        <button className={isFund ? "fund" : "foster"}
        onClick={handleClick}>
          {isFund ? "Fund Me" : "Foster Me"}
        </button>
    </div>
  )
}

export default Pets