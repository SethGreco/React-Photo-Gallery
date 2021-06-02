import '../style/Header.scss'
import {NavLink} from "react-router-dom";


const Header = ({title}) => {
  return (
    <div className="header">
      <div className="header-content">
      <h1>{title}</h1>
      <ul className="nav-links" >
        <li ><NavLink to="/">Map</NavLink></li>
        <li><NavLink className="display-list" to="/StatePhoto">States</NavLink></li>
      </ul>
      <ol className="state-list">
        <li>California</li>
        <li>Colorado</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
      <h3>by: Seth Greco</h3>
      </div>
      <div className="style-line"></div>
    </div>
  )
}

export default Header
