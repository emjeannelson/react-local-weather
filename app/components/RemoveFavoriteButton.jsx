import React from 'react';

export default class RemoveFavoriteButton extends React.Component {
  constructor() {
    super();
    this.onClickRemove = this.onClickRemove.bind(this);
  }
  onClickRemove() {
    let {city} = this.props;

    this.props.onRemoveFavorite(city);
  }
  render() {
    return (
      <button type="button" className="button hollow alert" onClick={this.onClickRemove}>Remove from Favorites</button>
    );
  }
}
