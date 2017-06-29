import React from 'react';

export default class AddFavoriteButton extends React.Component {
  constructor() {
    super();
    this.onClickRemove = this.onClickRemove.bind(this);
  }
  onClickRemove() {
    let {city} = this.props;

    this.props.onAddFavorite(city);
  }
  render() {
    return (
      <button onClick={this.onClickRemove}>Remove from Favorites</button>
    );
  }
}
