import React from 'react';
import '../style/Header.scss'
import Dropdown from './Dropdown'
import {NavLink} from "react-router-dom";


const Header = ({title}) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>{title}</h1>
        <ul className="nav-links" >
          <li><NavLink to="/">Map</NavLink></li>
        </ul>
        <Dropdown/>
        <h3>By: Seth Greco</h3>
      </div>
      <div className="style-line"></div>  
    </div>
  )
}

export default Header
