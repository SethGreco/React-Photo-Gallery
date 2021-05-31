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
        fill: "rgba(0, 196, 0, 0.9)",
      },
      "UT": {
        fill: "rgba(0, 196, 0, 0.9)",
      },
      "WA": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "OR": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "NM": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "TN": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "AZ": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "KY": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "MT": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "VA": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "WY": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "CO": {
        fill: "rgba(0, 196, 0, 0.9)"
      }
    };
  };

  render() {

    return (
      <div className="map-container">
        <h1>Map of the United States of America</h1>
        <h5>Click any state is green to see photos</h5>
        <USAMap height={600} width={900} customize={this.statesCustomConfig()}  onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;