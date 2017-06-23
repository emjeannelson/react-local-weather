import React from 'react';

import getLocation from 'ipAPI';

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {temp, desc} = this.props
    return (
      <div>
        <h1>{temp}, {desc}</h1>
      </div>
    )
  }
}
