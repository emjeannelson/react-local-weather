import React from 'react';

export default class FavoriteButton extends React.Component {
  constructor() {
    super();
    this.onClickFavorite = this.onClickFavorite.bind(this);
  }
  onClickFavorite() {
    let {city} = this.props;

    this.props.onAddFavorite(city);
  }
  render() {
    return (
      <button onClick={this.onClickFavorite}>Save as a Favorite Location</button>
    );
  }
}
