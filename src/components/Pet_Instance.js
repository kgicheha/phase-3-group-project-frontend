import React, {useState, useEffect} from 'react'

const Pet = ({id}) => {

  const [pet, setPet] = useState({})
  const [isBioHidden, setIsBioHidden] = useState(true);
  const [isFormHidden, setIsFormHidden] = useState(true);

  useEffect(()=>{
      fetch(`http://localhost:9292/pets/${id}`)
      .then(res => res.json())
      .then(data => {setPet(data)})
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function patching ()
  {
    fetch(`http://localhost:9292/pets/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        hunger: pet.hunger,
        thirst: pet.thirst,
        fun: pet.fun,
        hygiene: pet.hygiene,
        exhaustion: pet.exhaustion
      }),
    })
      .then((r) => r.json())
      .then(data => {setPet(data)})
  }

  const handleClick = (param) => {
    let newVal = pet[param];
    
    if (newVal < 10)
    {
      newVal += 1
      setPet(pet[param] = newVal, patching())
    }
    else
    {
      alert(`${pet.name} has ${param} fully sponsored, please pick another area or another pet.`)
    }
  }
  
  return (
    <div>
      <h1>{pet.name}</h1>
      <img src={pet.image_url} alt="Pet" width= "300" />
      <br/>
      <h4>Hunger: {pet.hunger}/10 | Thirst: {pet.thirst}/10 | Hygiene: {pet.hygiene}/10 | Fun: {pet.fun}/10 | Energy: {pet.exhaustion}/10</h4> 
      <button onClick={()=> handleClick("hunger")}>Food $3</button> &nbsp; &nbsp;
      <button onClick={()=> handleClick("hunger")}>Treat $0.50</button> &nbsp; &nbsp;
      <button onClick={()=> handleClick("thirst")}>Water $1</button> &nbsp; &nbsp;
      <button onClick={()=> handleClick("hygiene")}>Bath $5</button> &nbsp; &nbsp;
      <button onClick={()=> handleClick("fun")}>Toy $6</button> &nbsp; &nbsp;
      <button onClick={()=> handleClick("exhaustion")}>Walk $8</button> <br/><br/>
      <button onClick={()=> setIsBioHidden(!isBioHidden)}>{pet.name}'s Bio</button> <br/><br/>
      <button onClick={()=> setIsFormHidden(!isFormHidden)}>Adopt {pet.name} for ${pet.price}!</button>
      <p hidden ={isBioHidden}>{pet.name} is a {pet.temperament} {pet.age} year old {pet.gender}, a {pet.breed} of the {pet.species} variety. 
      The best home for {pet.name} should have {pet.recommendations}.
      {pet.medical === "n/a" ? ` ${pet.name} has no medical issues`: ` ${pet.name} unfortunately suffers from ${pet.medical}`}. 
      {pet.adopt_status==="not started" ? ` ${pet.name} is still waiting for someone to apply to be their forever home`: ` Someone has applied to adopt ${pet.name} and we are currently vetting their paperwork`}.
      </p>
      <p hidden = {isFormHidden}>We are unfortunately unable to take any applications at this time</p>

    </div>
  )
}

export default Pet