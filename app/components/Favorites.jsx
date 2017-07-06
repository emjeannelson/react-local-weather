import React from 'react';

import WeatherMessage from 'WeatherMessage';

export default class Favorites extends React.Component {
  render() {
    var {favorites, onRemoveFavorite, location} = this.props;

    var renderFavoritesCards = favorites.map(function(city, index) {
        return (
          <div key={index} className="columns small-12 medium-6 large-4">
            <div className="card">
              <WeatherMessage searchCity={city} location={location} onRemoveFavorite={onRemoveFavorite}/>
            </div>
          </div>
        );
      });

    function renderFavorites() {
        if (favorites.length > 0) {
          return (renderFavoritesCards);
        } else {
          return (
            <h3>You have no saved locations</h3>
          );
        }
    }

    return (
      <div>
        <h1 className="page-title text-center">Your Saved Locations</h1>
        <div className="row align-center">
            {renderFavorites()}
          </div>
      </div>

    );
  }
}
