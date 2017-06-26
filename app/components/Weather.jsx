import React from 'react';

import callLocationAPI from 'ipAPI';
import callWeatherAPI from 'openWeatherMap';

import WeatherMessage from 'WeatherMessage';
import SearchForm from 'SearchForm';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      units: 'metric',
      isLoading: false
    };
    this.getLocation = this.getLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });

    this.getLocation();
  }
  componentDidUpdate(prevProp, prevState) {
    if (!prevState.city && this.state.city) {
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
      });
    });
  }
  getWeather() {

    var city = this.state.city;
    var units = this.state.units;

    var that = this;

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
    });
  }
  handleSearch(city) {
    this.setState({
      city: city
    }, this.getWeather);
  }
  render() {
    return (
      <div>
        <WeatherMessage onChangeUnits={this.handleChangeUnits} units={this.state.units} isLoading={this.state.isLoading} city={this.state.city} temp={this.state.temp} desc={this.state.desc} />
        <SearchForm onSearch={this.handleSearch}/>
      </div>
    );
  }
}
