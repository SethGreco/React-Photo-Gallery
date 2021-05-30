import React, { Component } from 'react';
import '../style/App.scss';
import USAMap from "react-usa-map";


const stateNameMap = {
  "UT": "Utah",
  "TX": "Texas",
  "MT": "Montana",
  "CA": "California",
  "AZ": "Arizona",
  "CO": "Colorado",
  "WA": "Washington",
  "WY": "Wyoming",
  "NM": "NewMexico",
  "TN": "Tennesse",
  "KY": "Kentucky",
}

class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    let stName = event.target.dataset.name
    if (stName in stateNameMap) {
      stName = stateNameMap[stName]
      window.location =`/#/StatePhoto?st=${stName}`;
    } else {
      alert("State not mapped")
    }
  };


  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {

      "TX": {
        fill: "rgb(198, 230, 134)",
      },
      "UT": {
        fill: "#C6e686",
      },
      "WA": {
        fill: "#C6e686"
      },
      "OR": {
        fill: "#C6e686"
      },
      "NM": {
        fill: "#C6e686"
      },
      "TN": {
        fill: "#C6e686"
      },
      "AZ": {
        fill: "#C6e686"
      },
      "KY": {
        fill: "#C6e686"
      },
      "MT": {
        fill: "#C6e686"
      },
      "VA": {
        fill: "#C6e686"
      },
      "WY": {
        fill: "#C6e686"
      },
      "CO": {
        fill: "#C6e686"
      }
    };
  };

  render() {

    return (
      <div className="map-container">
        <h2>This is a test for an SVG clickable Map</h2>
        <p>The purpose of this test is to build a component
        that will be clickable by state and send client to
        /(view that state)
        </p>
        <USAMap height={500} width={725} customize={this.statesCustomConfig()}  onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;