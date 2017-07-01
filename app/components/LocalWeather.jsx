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
        country: location.country,
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

    var {isLoading, temp, desc, city, country, units, favorites} = this.state;

    var handleChangeUnits = this.handleChangeUnits;

    var handleSearch = this.handleSearch;

    var {onAddFavorite, location} = this.props;

    function renderWeatherReport() {
      if (city && !isLoading) {
        return (
          <div>
            <div className="row align-center">
              <div className="columns small-12 medium-6">
                <div className="card">
                  <WeatherMessage city={city} country={country} location={location}/>
                  <AddFavoriteButton city={city} onAddFavorite={onAddFavorite}/>
                </div>
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
