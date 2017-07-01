import React from 'react';

export default class WeatherConditions extends React.Component {
  render() {
    var {temp, desc} = this.props;

    return (
      <h3 className="text-center">{temp}&deg;, {desc}</h3>
    );
  }
}
