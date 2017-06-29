import React from 'react';

import callLocationAPI from 'ipAPI';
import callWeatherAPI from 'openWeatherMap';

import WeatherMessage from 'WeatherMessage';
import SearchForm from 'SearchForm';
import AddFavoriteButton from 'AddFavoriteButton';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      units: 'metric',
      isLoading: false,
    };
    this.getLocation = this.getLocation.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });

    this.getLocation();
  }
  getLocation() {

    var that = this;

    callLocationAPI().then(function(location) {
      console.log(location.city);
      that.setState({
        city: location.city,
        isLoading: false
      });
    }, function(e) {
      console.log('Sorry, we can\'t get your current location');
    });
  }
  handleSearch(city) {
    this.setState({
      city: city
    });
  }
  render() {

    var {isLoading, temp, desc, city, units, favorites} = this.state;

    var handleChangeUnits = this.handleChangeUnits;

    var handleSearch = this.handleSearch;

    var {onAddFavorite} = this.props;

    function renderWeatherReport() {
      if (city && !isLoading) {
        return (
          <div>
            <WeatherMessage city={city}/>
            <AddFavoriteButton city={city} onAddFavorite={onAddFavorite}/>
            <h2>Want to search for another location?</h2>
            <SearchForm onSearch={handleSearch}/>
          </div>
        );
      } else if (isLoading){
        return (
          <h1>Getting your location ... </h1>
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
