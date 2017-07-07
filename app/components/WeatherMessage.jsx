import React from 'react';

import WeatherConditions from 'WeatherConditions';
import UnitsButton from 'UnitsButton';
import AddFavoriteButton from 'AddFavoriteButton';
import RemoveFavoriteButton from 'RemoveFavoriteButton';

import callWeatherAPI from 'openWeatherMap';

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: 'metric',
      city: undefined,
      country: undefined,
      temp: undefined,
      icon: undefined,
      icon: undefined,
      isLoading: false,
      weatherweatherErrorMessage: undefined
    }
    this.getWeather = this.getWeather.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
  }
  componentDidMount() {
    this.getWeather();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchCity !== this.props.searchCity) {
      this.setState({
        isLoading: true,
        weatherErrorMessage: undefined
      }, this.getWeather);
    }
  }
  getWeather() {
    this.setState({
      isLoading: true
    });

    var that = this;

    var {units} = this.state;
    var {searchCity} = this.props;

    callWeatherAPI(searchCity, units).then(function(weather) {
      that.setState({
        city: weather.city,
        country: weather.country,
        desc: weather.desc,
        icon: weather.icon,
        isLoading: false,
        temp: weather.temp,
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        weatherErrorMessage: e.message
      });
    });
  }
  handleChangeUnits(newUnits) {
    this.setState({
      units: newUnits
    }, this.getWeather);
  }
  render() {

    var {city, country, desc, icon, isLoading, temp,  units, weatherErrorMessage} = this.state;

    var {location, onAddFavorite, onRemoveFavorite} = this.props;

    var handleChangeUnits = this.handleChangeUnits;

    function renderWeatherIcon() {
      switch (icon) {
        case '01d':
          return (<div className="weather-icon icon-01d"></div>);
          break;
        case '01n':
          return (<div className="weather-icon icon-01n"></div>);
          break;
        case '02d':
          return (<div className="weather-icon icon-02d"></div>);
          break;
        case '02n':
          return (<div className="weather-icon icon-02n"></div>);
          break;
        case '03d':
          return (<div className="weather-icon icon-03d"></div>);
          break;
        case '03n':
          return (<div className="weather-icon icon-03n"></div>);
          break;
        case '04d':
          return (<div className="weather-icon icon-04d"></div>);
          break;
        case '04n':
          return (<div className="weather-icon icon-04n"></div>);
          break;
        case '09d':
          return (<div className="weather-icon icon-09d"></div>);
          break;
        case '09n':
          return (<div className="weather-icon icon-09n"></div>);
          break;
        case '10d':
          return (<div className="weather-icon icon-10d"></div>);
          break;
        case '10n':
          return (<div className="weather-icon icon-10n"></div>);
          break;
        case '11d':
          return (<div className="weather-icon icon-11d"></div>);
          break;
        case '11n':
          return (<div className="weather-icon icon-11n"></div>);
          break;
        case '13d':
          return (<div className="weather-icon icon-13d"></div>);
          break;
        case '13n':
          return (<div className="weather-icon icon-13n"></div>);
          break;
        case '50d':
          return (<div className="weather-icon icon-50d"></div>);
          break;
        case '50n':
          return (<div className="weather-icon icon-50n"></div>);
          break;
      }
    }
    function renderWeatherReport() {
      if (!weatherErrorMessage && temp && !isLoading && location.pathname === 'favorites') {
        return (
          <div className="text-center">
            <div className="card-divider">
              <h1>{city}, {country}</h1>
            </div>
            <div className="card-section">
              {renderWeatherIcon()}
              <WeatherConditions temp={temp} desc={desc}/>
            </div>
            <UnitsButton units={units} onChangeUnits={handleChangeUnits} />
            <RemoveFavoriteButton city={city} onRemoveFavorite={onRemoveFavorite}/>
          </div>
        );
      } else if (!weatherErrorMessage && temp && !isLoading) {
        return (
          <div className="text-center">
            <div className="card-divider">
              <h1>{city}, {country}</h1>
            </div>
            <div className="card-section">
              {renderWeatherIcon()}
              <WeatherConditions temp={temp} desc={desc}/>
            </div>
            <UnitsButton units={units} onChangeUnits={handleChangeUnits} />
            <AddFavoriteButton city={city} onAddFavorite={onAddFavorite}/>
          </div>
        );
      } else if (isLoading) {
        return (
          <h2>Getting weather report ... </h2>
        );
      } else if (weatherErrorMessage) {
        return <h2 className="text-center red">{weatherErrorMessage}</h2>
      }
    }

    return (
      <div>
        {renderWeatherReport()}
      </div>
    );
  }
}
