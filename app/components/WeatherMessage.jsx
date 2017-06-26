import React from 'react';

import getLocation from 'ipAPI';
import UnitsButton from 'UnitsButton';

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    var {units, onChangeUnits, isLoading, city, region, country, temp, desc} = this.props;

    let weatherReport = null;

    let weatherConditions = <h2>{temp}&deg;, {desc}</h2>;

    if (!isLoading) {
      if (region) {
        weatherReport = <div>
          <h1>{city}</h1>
          {weatherConditions}
        </div>
      } else {
        weatherReport = <div>
          <h1>{city}</h1>
          {weatherConditions}
        </div>
      }
    }

    return (
      <div>
        {weatherReport}
        <UnitsButton units={units} isLoading={isLoading} onChangeUnits={onChangeUnits} />
      </div>
    );
  }
}
