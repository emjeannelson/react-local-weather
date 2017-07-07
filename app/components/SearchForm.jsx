import React from 'react';

export default class SearchForm extends React.Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();

    var city = this.refs.city.value;

    if (city.length > 0) {
        this.refs.city.value = '';
        this.props.onSearch(city);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search weather by city" ref="city"/>
          <button type="submit" className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}
