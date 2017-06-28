export function setFavorites(favorites) {
  if (Array.isArray(favorites)) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites;
  }
}

export function getFavorites() {
  var stringFavorites = localStorage.getItem('favorites');

  var favorites = [];

  try {
    favorites = JSON.parse(stringFavorites);
  } catch(e) {

  }

  return Array.isArray(favorites) ? favorites : [];
}
