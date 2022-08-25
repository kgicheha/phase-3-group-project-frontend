import React from 'react'
import { Route, Switch } from "react-router-dom";

import NavBar from './NavBar'
import Home from './Home'
import ParentsAll from './ParentsAll'
import PetsAll from './PetsAll'
import Pet from './Pet_Instance'
import PetsContainer from './PetsContainer';
import ParentsContainer from './ParentsContainer';

var test = 1;
var s_pTEST = "parents";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/shelters">
          <Shelters />
        </Route> */}
        <Route exact path="/parents">
          <ParentsAll />
        </Route>
        <Route exact path="/pets">
          <PetsAll />
        </Route>
        <Route exact path={`/${s_pTEST}/${test}/pets`}>
          <PetsContainer s_p ={s_pTEST} id ={test} />
        </Route>
        <Route exact path={`/pet/${test}`}>
          <Pet id={test}/>
        </Route>
        <Route exact path={`/shelters/${test}/parents`}>
          <ParentsContainer id ={test} />
        </Route>

      </Switch>
    </div>
  )
}

export default App
