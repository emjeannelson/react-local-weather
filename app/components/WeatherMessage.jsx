import React from 'react';

import getLocation from 'ipAPI';

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClickUnits = this.onClickUnits.bind(this);
  }
  onClickUnits(e) {
    var units = null;

    console.log(e.target.data-temp);
    /*
    if (e.target.data === 'data-metric') {
      units = 'imperial';
    } else {
      units = 'metric';
    }

    this.props.onChangeUnits(units);*/
  }
  render() {

    var {units, isLoading, city, region, country, temp, desc} = this.props;

    let weatherReport = null;

    let weatherConditions = <h2>{temp}&deg;, {desc}</h2>;

    let unitsButton = null;

    if (this.props.units === 'metric') {
      unitsButton = <button data-temp="metric" onClick={this.onClickUnits}>&deg;C</button>
    } else {
      unitsButton = <button data-temp="imperial" onClick={this.onClickUnits}>&deg;F</button>
    }

    if (!isLoading) {
      if (region) {
        weatherReport = <div>
          <h1>{city}, {region}, {country}</h1>
          {weatherConditions}
          {unitsButton}
        </div>
      } else {
        weatherReport = <div>
          <h1>{city}, {country}</h1>
          {weatherConditions}
          {unitsButton}
        </div>
      }
    }

    return (
      <div>
        {weatherReport}
      </div>
    );
  }
}
