import React from 'react';

import callLocationAPI from 'ipAPI';
import callWeatherAPI from 'openWeatherMap';

import WeatherMessage from 'WeatherMessage';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      region: undefined,
      country: undefined,
      lat: undefined,
      lon: undefined,
      units: 'metric',
      isLoading: false
    };
    this.getLocation = this.getLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });

    this.getLocation();
  }
  componentDidUpdate(prevProp, prevState) {
    if (!prevState.lat && this.state.lat) {
      this.getWeather();
    } else if (prevState.units !== this.state.units) {
      this.getWeather();
    }
  }
  getLocation() {

    var that = this;

    callLocationAPI().then(function(location) {
      console.log(location.city);
      that.setState({
        city: location.city,
        region: location.region,
        country: location.country,
        lat: location.lat,
        lon: location.lon
      });
    });
  }
  getWeather() {

    var lat = this.state.lat;
    var lon = this.state.lon;
    var units = this.state.units;

    var that = this;

    callWeatherAPI(lat, lon, units).then(function(weather) {
      that.setState({
        temp: weather.temp,
        desc: weather.desc,
        isLoading: false
      });
    });
  }
  handleChangeUnits(newUnits) {
    this.setState({
      units: newUnits
    });
  }
  render() {
    return (
      <WeatherMessage onChangeUnits={this.handleChangeUnits} units={this.state.units} isLoading={this.state.isLoading} city={this.state.city} region={this.state.region} country={this.state.country} temp={this.state.temp} desc={this.state.desc} />
    );
  }
}
