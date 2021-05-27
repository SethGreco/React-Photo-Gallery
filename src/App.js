import React from 'react'
import './App.css'; /* optional for styling like the :hover pseudo-class */

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import StatePhoto from "./components/StatePhoto";
import Map from "./components/Map";
import Home from "./components/Home";
import Header from "./components/Header"


const App = () => {
  return (
    <HashRouter>
    <div>
      <Header title='Hello From Props'/>
      <ul className="header" >
        <li ><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/StatePhoto">Photos</NavLink></li>
        <li><NavLink to="/Map">Map</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/Map" component={Map}/>
        <Route path="/StatePhoto" component={StatePhoto}/>
      </div>
    </div>
    </HashRouter>
  );
}

export default App
