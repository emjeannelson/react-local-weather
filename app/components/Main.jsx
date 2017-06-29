import React from 'react';

import Nav from 'Nav';
import {getFavorites, setFavorites} from 'FavoritesAPI';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: getFavorites()
    }
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.favorites !== this.state.favorites) {
      setFavorites(this.state.favorites);
    }
  }
  handleAddFavorite(city) {
    if (!this.state.favorites.includes(city)) {
      this.setState({
        favorites: [
          ...this.state.favorites,
          city
        ]
      });
    }
  }
  render() {
    var children = this.props.children;
    var childrenWithProps = React.cloneElement(children, {
      onAddFavorite: this.handleAddFavorite,
      favorites: this.state.favorites
    });

    return (
      <div>
        <Nav />
        {childrenWithProps}
      </div>
    );
  }
}
