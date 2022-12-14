import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'

const Sponsor = () => {

    const [formData, setFormData] = useState({
        image_url: "https://i.stack.imgur.com/l60Hf.png",
        name: "",
        service_years: 0,
        preferences: "",
        budget: 0,
        hours_at_home: 0,
        living_situation: "",
        current_num_pets: 0,
        pet_confiscation: false,
        vet_provider: "",
        willing_6m_follow_up: true,
        give_pet_back: true,
        donated_amt: "",
        reoccuring: false,
        gift: true,
        gift_in_honor_of: ""
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
        image_url: "https://i.stack.imgur.com/l60Hf.png",
        name: "",
        service_years: 0,
        preferences: "",
        budget: 0,
        hours_at_home: 0,
        living_situation: "",
        current_num_pets: 0,
        pet_confiscation: false,
        vet_provider: "",
        willing_6m_follow_up: true,
        give_pet_back: true,
        donated_amt: "",
        reoccuring: false,
        gift: true,
        gift_in_honor_of: ""
    })
    alert("Thank you for your donation!");
}

//create handleChange
function handleChange(e) {
    if (e.target.name === "reoccuring" || e.target.name === "gift")
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
        <h2>Donate Today</h2>
        <Form className="form" onSubmit={handleSubmit}>
            <label>Full Name:</label>
                <input type="text" name="name" value ={formData.name} onChange={handleChange}/>
            <br></br> <br></br>
            <label>How much would you like to donate today?</label>
                <input type="number" name="donated_amt" min={0} value ={formData.donated_amt} onChange={handleChange}/>
            <br></br><br></br>
            <label>Will this be a reoccurring donation?</label>
            <br></br>
                <select name="reoccuring"value={formData.reoccuring} onChange={handleChange}>
                    <option selected="selected" value={true}>True</option>
                    <option value={false}>False</option>
                </select>
            <br></br>
            <label>Is this a gift?</label><br></br>
                <select name="gift"value={formData.gift} onChange={handleChange}>
                    <option selected="selected" value={true}>True</option>
                    <option value={false}>False</option>
                </select>
            <br></br>
            <label>If its a gift, who is this gift for?</label><br></br>
                <input type="text" name="gift_in_honor_of" value ={formData.gift_in_honor_of} onChange={handleChange}/><br></br>
            <br></br>
            <Button type='submit'>Submit</Button>
            </Form>
    </div>
  )
}

export default Sponsor
