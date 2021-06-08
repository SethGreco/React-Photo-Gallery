import React, { Component } from 'react';
import '../style/App.scss';
import USAMap from "react-usa-map";




const stateNameMap = {
  "OR": "Oregon",
  "VA": "Virginia",
  "UT": "Utah",
  "TX": "Texas",
  "MT": "Montana",
  "CA": "California",
  "AZ": "Arizona",
  "CO": "Colorado",
  "WA": "Washington",
  "WY": "Wyoming",
  "NM": "NewMexico",
  "TN": "Tennessee",
  "KY": "Kentucky",
}

class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    let stName = event.target.dataset.name    
    if (stName in stateNameMap) {
      stName = stateNameMap[stName]
      window.location =`index.html#/StatePhoto?st=${stName}`;
    } else {
      alert("No pictures from this state currently, check back later!")
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
      },
      "CA": {
        fill: "rgba(0, 196, 0, 0.9)"
      },
      "ID": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "WV": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "NY": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "OK": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "KS": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "SD": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "ND": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "IA": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "FL": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "NV": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "GA": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "LA": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "MS": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "AL": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "NE": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "HI": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "AK": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "AR": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "MO": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "OH": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "IO": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "WI": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "MI": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "NC": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "SC": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "DE": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "ME": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "PA": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "VT": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "RI": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "CT": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "NJ": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "NH": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "MN": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "MD": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "MA": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "IL": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
      "IN": {
        fill: "rgba(232, 26, 26, 0.9)"
      },
    };
  };

  render() {

    return (
      <div className="map-container">
        <h1>Map of the United States of America</h1>
        <h5>Click any state that is green to see photos</h5>
        <USAMap height={600} width={900} customize={this.statesCustomConfig()}  onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;