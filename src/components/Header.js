import '../style/Header.scss'
import {NavLink} from "react-router-dom";

const Header = ({title}) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <ul className="nav-links" >
        <li ><NavLink to="/">Map Overview</NavLink></li>
        <li ><NavLink to="/StatePhoto">Photos</NavLink></li>
      </ul>
      <h3>by: Seth Greco</h3>
      
    </div>
  )
}

export default Header
