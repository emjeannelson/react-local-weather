import React from 'react';

import callLocationAPI from 'ipAPI';
import callWeatherAPI from 'openWeatherMap';

import AddFavoriteButton from 'AddFavoriteButton';
import SearchForm from 'SearchForm';
import WeatherMessage from 'WeatherMessage';

export default class LocalWeather extends React.Component {
  constructor() {
    super();
    this.state = {
      locationErrorMessage: undefined,
      isLoading: false,
      searchCity: undefined,
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
      that.setState({
        searchCity: location.city,
        isLoading: false
      });
    }, function(e) {
        that.setState({
          locationErrorMessage: e.message
        });
    });
  }
  handleSearch(city) {
    this.setState({
      searchCity: city,
    });
    this.props.clearFavoritesMessage();
  }
  render() {

    var {country, desc, locationErrorMessage, isLoading, searchCity, temp, units} = this.state;
    var {addFavoritesMessage, favorites, location, onAddFavorite} = this.props;
    var handleChangeLocation = this.handleChangeLocation;
    var handleChangeUnits = this.handleChangeUnits;
    var handleSearch = this.handleSearch;


    function renderWeatherReport() {
      if (searchCity && !isLoading) {
        return (
          <div className="text-center">
            <div className="row align-center">
              <div className="columns small-12 medium-6">
                <div className="card">
                  <WeatherMessage favorites={favorites} onAddFavorite={onAddFavorite} searchCity={searchCity} location={location}/>
                </div>
                <p>{addFavoritesMessage}</p>
              </div>
            </div>
            <div className="row align-center">
              <div className="colummn small-12 medium-6">
                <h2 className="text-center section-title">Search for another location:</h2>
                <SearchForm onSearch={handleSearch}/>
              </div>
            </div>
          </div>
        );
      } else if (isLoading){
        return (
            <h3 className="text-center">Getting your location, this might take a minute ... </h3>
        );
      } else if (locationErrorMessage) {
        return (<h2 className="text-center red">{locationErrorMessage}</h2>);
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Your Weather Report</h1>
        {renderWeatherReport()}
      </div>
    );
  }
}
