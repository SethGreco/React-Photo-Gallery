import '../style/Header.scss'
import {NavLink} from "react-router-dom";

const Dropdown = () => {
  

  return (
    <div className='dropdown'>
      <h3 className='drp-activate'>States</h3>
        <div className='content'>
          <ol className="state-list">
            <li><NavLink to="/StatePhoto?st=$Arizona">Arizona</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$California">California</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Colorado">Colorado</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Kentucky">Kentucky</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Montana">Montana</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$NewMexico">New Mexico</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Oregon">Oregon</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Tennessee">Tennessee</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Texas">Texas</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Utah">Utah</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Virginia">Virginia</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Washington">Washington</NavLink></li>
            <li><NavLink to="/StatePhoto?st=$Wyoming">Wyoming</NavLink></li>
          </ol>
        </div>
    </div>
  )
}

export default Dropdown
