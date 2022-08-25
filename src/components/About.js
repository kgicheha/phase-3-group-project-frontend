import React from 'react'
import NewParentForm from './NewParentForm'

const About = () => {
  return (
    <>

    <div>
        <h2>About This Project</h2>
        <p>This app is used to raise funds for animal shelters.
            It allows users to foster a pet or underwrite a pet.
            It offers a user the opportunity to digitally maintain their fostered/sponsored pet via life stats, such as hunger/thirst/fun/hygiene/etc.
        </p>
    </div>
    <NewParentForm />
    <div>
        <h3>About collaborators</h3>
        <p>
            Karter Livingston: <a href="https://github.com/kdliving14">github</a>
        </p>
        <p>
            Danna Waltz: <a href="https://github.com/DannaEWaltz">github</a>
        </p>
        <p>
            Justin Myers: <a href="https://github.com/jlmyers14">github</a>
       </p>
        <p>
            Kevin Gicheha: <a href="https://github.com/kgicheha">github</a>
        </p>

    </div>
    </>

  )
}

export default About