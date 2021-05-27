import React, { Component } from 'react';
import '../App.css';
import USAMap from "react-usa-map";
// import {
//   Router,
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";



class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {

    // alert(event.target.dataset.name);
    // console.log(event.target.dataset.name);
    window.location ='/#/StatePhoto/';
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {

      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      },
      "TX": {
        fill: "green"
      }
    };
  };

  render() {

    return (
      <div className="App">
        <USAMap customize={this.statesCustomConfig()}  onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;