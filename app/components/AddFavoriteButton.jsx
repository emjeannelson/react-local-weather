import React from 'react';

export default class AddFavoriteButton extends React.Component {
  constructor() {
    super();
    this.onClickFavorite = this.onClickFavorite.bind(this);
  }
  onClickFavorite() {
    var {city} = this.props;

    this.props.onAddFavorite(city);
  }
  render() {
    return (
      <button type="button" className="button hollow success" onClick={this.onClickFavorite}>Add to Saved Locations</button>
    );
  }
}
