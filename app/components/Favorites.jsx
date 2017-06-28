import React from 'react';

import WeatherMessage from 'WeatherMessage';

export default class Favorites extends React.Component {


  render() {
    return (
      <h1>Favorite Places</h1>
      /*
      <ul>
        {favorites.map(function(city, index) {
          return <li key={index}>
            <WeatherMessage />
          </li>
        })}
      </ul>*/
    );
  }
}
