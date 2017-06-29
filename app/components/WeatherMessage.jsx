import React from 'react';

import UnitsButton from 'UnitsButton';

import callWeatherAPI from 'openWeatherMap';

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: 'metric',
      city: this.props.city,
      isLoading: false
    }
    this.getWeather = this.getWeather.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
  }
  componentDidMount() {
    this.getWeather();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      this.setState({
        city: this.props.city,
        isLoading: true
      }, this.getWeather);
    }
  }
  getWeather() {
    this.setState({
      isLoading: true
    });

    var that = this;
    var {city, units} = this.state;

    callWeatherAPI(city, units).then(function(weather) {
      that.setState({
        city: weather.city,
        temp: weather.temp,
        desc: weather.desc,
        isLoading: false
      });
    });
  }
  handleChangeUnits(newUnits) {
    this.setState({
      units: newUnits
    }, this.getWeather);
  }
  render() {

    var {units, temp, desc, city, isLoading} = this.state;

    var handleChangeUnits = this.handleChangeUnits;

    function renderWeatherReport() {
      if (temp && !isLoading) {
        return (
          <div>
            <h1>{city}</h1>
            <h2>{temp}&deg; {desc}</h2>
            <UnitsButton units={units} onChangeUnits={handleChangeUnits} />
          </div>
        );
      } else if (isLoading){
        return (
          <h1>Getting weather report ... </h1>
        );
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        {renderWeatherReport()}
      </div>
    );
  }
}
