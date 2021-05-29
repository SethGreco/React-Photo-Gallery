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
    }
 
    window.location =`/#/StatePhoto?st=${stName}`;
  };

  

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {

      "NJ": {
      },
      "NY": {
      },
      "TX": {
        fill: "#C6e686"
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
      <div>
        <USAMap customize={this.statesCustomConfig()}  onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;