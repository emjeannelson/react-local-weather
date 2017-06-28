import React from 'react';

import callLocationAPI from 'ipAPI';
import callWeatherAPI from 'openWeatherMap';
import {getFavorites, setFavorites} from 'FavoritesAPI';

import WeatherMessage from 'WeatherMessage';
import SearchForm from 'SearchForm';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      units: 'metric',
      isLoading: false,
      favorites: getFavorites(),
      temp: undefined,
      desc: undefined
    };
    this.getLocation = this.getLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
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
    }

    if (prevState.units !== this.state.units) {
      this.getWeather();
    }

    if (prevState.favorites !== this.state.favorites) {
      setFavorites(this.state.favorites);
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
      isLoading: true,
      city: city
    }, this.getWeather);
  }
  handleAddFavorite(city) {
    if (!this.state.favorites.includes(city)) {
      this.setState({
        favorites: [
          ...this.state.favorites,
          city
        ]
      });
    }
  }
  render() {

    let {isLoading, temp, desc, city, units, favorites} = this.state;

    let handleChangeUnits = this.handleChangeUnits;

    let handleSearch = this.handleSearch;

    let handleAddFavorite = this.handleAddFavorite;

    function renderWeatherReport() {
      if (temp && city && !isLoading) {
        return (
          <div>
            <WeatherMessage favorites={favorites} onAddFavorite={handleAddFavorite} isLoading={isLoading} temp={temp} desc={desc} city={city} units={units} onChangeUnits={handleChangeUnits}/>
            <h2>Want to search for another location?</h2>
            <SearchForm onSearch={handleSearch}/>
          </div>
        );
      } else if (isLoading){
        return (
          <h1>Fetching the weather ... </h1>
        );
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        {renderWeatherReport()}
        {this.props.children}
      </div>
    );
  }
}
