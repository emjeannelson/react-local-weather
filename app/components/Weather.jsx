import React from 'react';

import getLocation from 'ipAPI';
import getWeather from 'openWeatherMap';

import WeatherMessage from 'WeatherMessage';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: undefined,
      lon: undefined,
      isLoading: false
    };
  }
  componentDidMount() {

    this.setState({
      isLoading: true
    });

    var that = this;

    getLocation().then(function(location) {

      var lat = location.lat;
      var lon = location.lon;

      var newThat = that;

      getWeather(lat, lon).then(function(weather){

        newThat.setState({
          temp: weather.temp,
          desc: weather.desc
        });
      }, function(e) {
        console.log('Error!');
      });
    }, function(e) {
      console.log(e);
    });
  }
  render() {
    return (
      <WeatherMessage temp={this.state.temp} desc={this.state.desc} />
    );
  }
}
