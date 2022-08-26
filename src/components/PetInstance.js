import React, {useState, useEffect} from 'react'
import { Button, Image } from 'semantic-ui-react';

import NewParentForm from './NewParentForm'

const PetInstance = ({id}) => {

  const [pet, setPet] = useState({})
  const [isBioHidden, setIsBioHidden] = useState(true);
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [isMessage, setIsMessage] = useState(true)
  const [isInstanceHidden, setisInstanceHidden] = useState(false)

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

  const handleClick = (e, param) => {
    e.preventDefault()
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

  function afterFormSubmit(){
    //make a delete request for specific pet
    fetch(`http://localhost:9292/pets/${id}`,{
     method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
    .then(resp => resp.json())
    .then(setPet(pet))

    //populate a message that the form has been submitted
    setIsMessage(!isMessage)
    //set form to hidden
    setIsFormHidden(true)

    setisInstanceHidden(!isInstanceHidden)
  }

  return (
    <div className='Container'>
      <h3 hidden = {isMessage}>Congratulations!! You have successfully adopted the pet!</h3>
    <div hidden ={isInstanceHidden} className='PetInstance'>
      <h1>{pet.name}</h1>
      <br/>
      <Image className="Petimage" src={pet.image_url} alt="Pet" width= "300" />
      <br/>
      <h4>Hunger: {pet.hunger}/10 | Thirst: {pet.thirst}/10 | Hygiene: {pet.hygiene}/10 | Fun: {pet.fun}/10 | Energy: {pet.exhaustion}/10</h4> 
      <div className='PetIbuttons'>
        <Button.Group>
        <Button onClick={(e)=> handleClick(e, "hunger")}>Food $3</Button>
        <Button onClick={(e)=> handleClick(e, "hunger")}>Treat $0.50</Button>
        <Button onClick={(e)=> handleClick(e, "thirst")}>Water $1</Button>
        <Button onClick={(e)=> handleClick(e, "hygiene")}>Bath $5</Button>
        <Button onClick={(e)=> handleClick(e, "fun")}>Toy $6</Button>
        <Button onClick={(e)=> handleClick(e, "exhaustion")}>Walk $8</Button> <br/><br/>
        </Button.Group>
      </div>
      <div className='PetIbuttons'>
        <Button onClick={()=> setIsBioHidden(!isBioHidden)}>{pet.name}'s Bio</Button> <br/><br/>
        <Button onClick={()=> setIsFormHidden(!isFormHidden)}>Adopt {pet.name} for ${pet.price}!</Button>
      </div>
        <p hidden ={isBioHidden}>{pet.name} is a {pet.temperament} {pet.age} year old {pet.gender}, a {pet.breed} of the {pet.species} variety. 
        The best home for {pet.name} should have {pet.recommendations}.
        {pet.medical === "n/a" ? ` ${pet.name} has no medical issues`: ` ${pet.name} unfortunately suffers from ${pet.medical}`}. 
        {pet.adopt_status==="not started" ? ` ${pet.name} is still waiting for someone to apply to be their forever home`: ` Someone has applied to adopt ${pet.name} and we are currently vetting their paperwork`}.
        </p>
      </div>
      <div hidden = {isFormHidden}><NewParentForm afterFormSubmit={afterFormSubmit}/></div>
    </div>
  )
}

export default PetInstance
