import './style/App.scss'; 
import {Route,HashRouter} from "react-router-dom";
import StatePhoto from "./components/StatePhoto";
import Map from "./components/Map";
import Header from "./components/Header";

/*
* TODO 
* 3.  Add in a drop down list of states for quick call.
* 6.  Finish styling the page. -> opacity on pictures and states
      header icons for insta and all rights reserved
      menu selectors underlined box
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
