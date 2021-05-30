import './style/App.scss'; 
import {Route,NavLink,HashRouter} from "react-router-dom";
import StatePhoto from "./components/StatePhoto";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer"

/*
* TODO 
* 1.  Implement Pagination of infinite scrolling for photos that exceed standard page size
* 3.  Add in a list of states for quick call.  Potentially in collapsable menu
* 6.  Finish styling the page.
*/
const App = () => {
  return (
    <HashRouter>
    <div className="App">
      <div className="Main-Nav">
      <ul className="nav-links" >
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/StatePhoto">Photos</NavLink></li>
      </ul>
      </div>
      <Header title='Landscape and Nature Photography Gallery'/>
      <div className="content">
        <Route exact path="/" component={Map}/>
        <Route path="/StatePhoto" component={StatePhoto}/>
      </div>
      <Footer/>
    </div>
    </HashRouter>
  );
}

export default App
