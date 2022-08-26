import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'

const NewParentForm = () => {

    const [formData, setFormData] = useState({
        image_url: "../Assets/default_profile_photo.jpeg",
        name:"",
        service_years: 0,
        preferences: "",
        budget: "",
        hours_at_home: "",
        living_situation: "",
        current_num_pets: "",
        pet_confiscation: true,
        vet_provider: "",
        willing_6m_follow_up: true,
        give_pet_back: true,
        donated_amt: 0,
        reoccuring: false,
        gift: false,
        gift_in_honor_of: "N/A"
    })

// handle Submit that will post to /parents
const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    console.log(formData)

    //make post request on submit
       fetch(`http://localhost:9292/parents`,{
         method: 'POST',
         headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
         },
         body: JSON.stringify(formData)
       })

    // reset form
    setFormData({
        image_url: "../Assets/default_profile_photo.jpeg",
        name: "",
        service_years: 0,
        preferences: "",
        budget: "",
        hours_at_home: "",
        living_situation: "",
        current_num_pets: "",
        pet_confiscation: true,
        vet_provider: "",
        willing_6m_follow_up: true,
        give_pet_back: true,
        donated_amt: 0,
        reoccuring: false,
        gift: false,
        gift_in_honor_of: "N/A"
    })

}

//create handleChange
function handleChange(e) {
    if (e.target.name === "pet_confiscation" || e.target.name === "give_pet_back" || e.target.name === "willing_6m_follow_up")
        {
            let result;
            e.target.value === "false" ? result = false : result = true
            setFormData({...formData,
                [e.target.name]: result
              })
        }
    else
    (
        setFormData({...formData,
        [e.target.name]: e.target.value
        })
    )
  }

  return (
    <div className='FormContainer'>
        <h2>Sign Up Today To Become a Foster Parent</h2>
        <Form className="form" onSubmit={handleSubmit}>
            <label>Name</label><br></br>
                <input type="text" name="name" value ={formData.name} onChange={handleChange}/><br></br>
            <label>Current Number of Pets?</label><br></br>
                <input type="number" name="current_num_pets" min={0} value ={formData.current_num_pets} onChange={handleChange}/><br></br>
            <label>Any pet preferences?</label><br></br>
                <input type="text" name="preferences" value ={formData.preferences} onChange={handleChange} /><br></br>
            <label>What is your budget?</label><br></br>
                <input type="number" name="budget" min={0} value ={formData.budget} onChange={handleChange}/><br></br>
            <label>How many hours will you be at home(weekly)?</label><br></br>
                <input type="number" name="hours_at_home" min={0} max={168} value ={formData.hours_at_home} onChange={handleChange}/><br></br>
            <label>Current Living Situation?(eg. apartment, house)</label><br></br>
                <input type="text" name="living_situation" value ={formData.living_situation} onChange={handleChange}/><br></br>
            <label>Which vet provider do you currently have?</label><br></br>
                <input type="text" name="vet_provider" value ={formData.vet_provider} onChange={handleChange}/><br></br>
            <label>Have you had pets confiscated before?</label><br></br>
                <select name="pet_confiscation"value={formData.pet_confiscation} onChange={handleChange}>
                    <option selected="selected" value={true}>true</option>
                    <option value={false}>false</option>
                </select><br></br>
            <label>Are you open to a 6 month follow up from shelter?</label><br></br>
                <select name="willing_6m_follow_up"value={formData.willing_6m_follow_up} onChange={handleChange}>
                    <option selected="selected" value={true}>true</option>
                    <option value={false}>false</option>
                </select><br></br>
            <label>Are you willing to give the pet back if the living condition is found to be unsuitable?</label><br></br>
                <select name="give_pet_back"value={formData.give_pet_back} onChange={handleChange}>
                    <option selected="selected" value={true}>true</option>
                    <option value={false}>false</option>
                </select><br></br>
            <input type="submit" value="Submit" />
        </Form>
    </div>
  )
}

export default NewParentForm
