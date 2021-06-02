import './style/App.scss'; 
import {Route,HashRouter} from "react-router-dom";
import StatePhoto from "./components/StatePhoto";
import Map from "./components/Map";
import Header from "./components/Header";

/*
* TODO 
*     Add in a drop down list of states for quick call.
*     opacity on pictures and states
*     finish manual setup of map states color 
*/
const App = () => {
  return (
    <HashRouter>
    <div className="App">
    <Header title='Landscape Photography Gallery'/>
      <div className="content">
        <Route exact path="/" component={Map}/>
        <Route path="/StatePhoto" component={StatePhoto}/>
      </div>
    </div>
    </HashRouter>
  );
}

export default App
