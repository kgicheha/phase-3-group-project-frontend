import {React, useState} from 'react'
import {Route, Routes} from "react-router-dom";

import NavBar from './NavBar'
import About from './About'
import ParentsAll from './ParentsAll'
import SheltersContainer from './SheltersContainer'
import PetsAll from './PetsAll'
import PetsContainer from './PetsContainer';
import ParentsContainer from './ParentsContainer';
import PetInstance from './PetInstance';

const App = () => {

  // eslint-disable-next-line
  const [s_p, setS_P] = useState("")
  const [iD, setID] = useState(1)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<About/>}></Route>

        <Route path={`/parents/1/pets`} element={<PetsContainer s_p={"parents"} iD={iD} setID = {setID}/>}></Route>

        <Route path="/shelters" element={<SheltersContainer setS_P ={setS_P} setID={setID}/>}></Route>

        <Route path="/parents" element={<ParentsAll setS_P ={setS_P} setID={setID}/>}></Route>
        <Route path="/pets" element={<PetsAll setID={setID}/>}></Route>
        <Route path={`/shelters/${1}/pets`} element={<PetsContainer s_p={"shelters"} iD={iD} setID = {setID}/>}></Route>
        <Route path={`/shelters/${2}/pets`} element={<PetsContainer s_p={"shelters"} iD={iD} setID = {setID}/>}></Route>
        <Route path={`/shelters/${3}/pets`} element={<PetsContainer s_p={"shelters"} iD={iD} setID = {setID}/>}></Route>

        <Route path={`/shelters/${1}/parents`} element={<ParentsContainer iD={iD} setID = {setID} setS_P ={setS_P}/>}></Route>
        <Route path={`/shelters/${2}/parents`} element={<ParentsContainer iD={iD} setID = {setID} setS_P ={setS_P}/>}></Route>
        <Route path={`/shelters/${3}/parents`} element={<ParentsContainer iD={iD} setID = {setID} setS_P ={setS_P}/>}></Route>

        <Route path={`/parents/${iD}/pets`} element={<PetsContainer s_p={"parents"} iD={iD} setID = {setID}/>}></Route>
        
        <Route path={`/pet/${iD}`} element= {<PetInstance id={iD}/>}></Route>

        <Route path={`/parents/1/pets`} element={<PetsContainer s_p={"parents"} iD={iD} setID = {setID}/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App

