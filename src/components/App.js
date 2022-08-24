import React from 'react'
import NavBar from './NavBar'
import ParentsContainer from './ParentsContainer'
import PetsContainer from './PetsContainer'
// import { Route, Switch } from 'react-router-dom';

var test = 1;

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <ParentsContainer /> */}
      <PetsContainer s_p ={"parents"} id = {test}/>
     </div>
  )
}

export default App