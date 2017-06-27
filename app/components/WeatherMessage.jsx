import React from 'react';

import getLocation from 'ipAPI';
import UnitsButton from 'UnitsButton';
import FavoriteButton from 'FavoriteButton';

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    var {units, onChangeUnits, onAddFavorite, isLoading, city, temp, desc} = this.props;

    return (
      <div>
        <h1>{city}</h1>
        <h2>{temp}&deg; {desc}</h2>
        <UnitsButton units={units} isLoading={isLoading} onChangeUnits={onChangeUnits} />
        <FavoriteButton city={city} onAddFavorite={onAddFavorite}/>
      </div>
    );
  }
}
