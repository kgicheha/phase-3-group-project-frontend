import React from 'react'
import Sponsor from './Sponsor'

const About = () => {
    return (
    <div className='aboutContainer'>
        <div className='aboutProject'>
            <h2>About This Project</h2>
            <p>This application is used to find loving forever houses for pets and to raise funds for animal shelters.
            It allows users to foster a pet, sponsor a pet or to make donations to the shelters.
            It offers a user the opportunity to digitally maintain their fostered/sponsored pet via life stats, such as hunger/thirst/fun/hygiene/etc.
            </p>
        </div>
        <br/>
        <Sponsor />
        <br/>
        <h3>About Collaborators</h3>
        <div className="Container">
            <div className="card">
                <p>
                    <img className="AboutPicture" id="Karter" src={require("../Assets/Karter.jpg")} alt="Karter"/> <br/>
                    Karter Livingston: <a href="https://github.com/kdliving14">GitHub</a> - {''}
                    <a href="https://www.linkedin.com/in/karter-livingston">LinkedIn</a>
                </p>
                </div>
            <div className="card">
                <p>
                    <img className="AboutPicture" id="Danna" src={require("../Assets/Danna.jpg")} alt="Danna"/> <br/>
                    Danna Waltz: <a href="https://github.com/DannaEWaltz">GitHub</a> - {''}
                    <a href="https://www.linkedin.com/in/danna-waltz-2607b222b">LinkedIn</a>
                </p>
            </div>
            <div className="card">
                <p>
                    <img className="AboutPicture" id="Justin" src={require("../Assets/Justin.jpg")} alt="Justin"/> <br/>
                    Justin Myers: <a href="https://github.com/jlmyers14">GitHub</a> - {''}
                    <a href="https://www.linkedin.com/in/justin-leroux-myers">LinkedIn</a>
                </p>
            </div>
            <div className="card">
                <p>
                    <img className="AboutPicture" id="Kevin" src={require("../Assets/Kevin.jpg")} alt="Kevin"/> <br/>
                    Kevin Gicheha: <a href="https://github.com/kgicheha">GitHub</a> - {''}
                    <a href="https://www.linkedin.com/in/kevin-gicheha/">LinkedIn</a>          
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
