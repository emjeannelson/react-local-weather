import React from 'react';

import Nav from 'Nav';

import {getFavorites, setFavorites} from 'FavoritesAPI';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      addFavoritesMessage: '',
      favorites: getFavorites(),
    }
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleClearFavoritesMessage = this.handleClearFavoritesMessage.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.favorites !== this.state.favorites) {
      setFavorites(this.state.favorites);
    }
  }
  handleAddFavorite(city) {
    if (city && !this.state.favorites.includes(city)) {
      this.setState({
        favorites: [
          ...this.state.favorites,
          city
        ],
        addFavoritesMessage: 'Added ' + city + ' to your saved locations.'
      });
    } else if (this.state.favorites.includes(city)) {
      this.setState({
        addFavoritesMessage: city + ' is already in your saved locations.'
      });
    }
  }
  handleClearFavoritesMessage() {
    this.setState({
      addFavoritesMessage: ''
    });
  }
  handleRemoveFavorite(city) {
    var filteredFavorites = this.state.favorites.filter(function(favorite) {
      return favorite !== city;
    });
    this.setState({
      favorites: filteredFavorites
    });
  }
  render() {
    var children = this.props.children;
    var childrenWithProps = React.cloneElement(children, {
      favorites: this.state.favorites,
      onAddFavorite: this.handleAddFavorite,
      addFavoritesMessage: this.state.addFavoritesMessage,
      clearFavoritesMessage: this.handleClearFavoritesMessage,
      onRemoveFavorite: this.handleRemoveFavorite,
    });

    return (
      <div>
        <Nav />
        {childrenWithProps}
      </div>
    );
  }
}
