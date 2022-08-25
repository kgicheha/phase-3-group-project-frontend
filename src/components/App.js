import React from 'react'
import { Route, Routes} from "react-router-dom";

import NavBar from './NavBar'
import Home from './Home'
import ParentsAll from './ParentsAll'
import PetsAll from './PetsAll'
import Pet from './Pet_Instance'
import PetsContainer from './PetsContainer';
import ParentsContainer from './ParentsContainer';

var id = 1;
var s_p = "shelters";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shelters" element={<Shelters/>}></Route>
        <Route path="/parents" element={<ParentsAll/>}></Route>
        <Route path="/pets" element={<PetsAll />}></Route>
        <Route path={`/${s_p}/${id}/pets`} element={<PetsContainer s_p={s_p} id={id}/>}></Route>
        <Route path={`/pet/${id}`} element= {<Pet id={id}/>}></Route>
        <Route path={`/shelters/${id}/parents`} element={<ParentsContainer id={id}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
