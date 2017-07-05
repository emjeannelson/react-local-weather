import React from 'react';

export default class UnitsButton extends React.Component {
  constructor() {
    super();
    this.onClickUnits = this.onClickUnits.bind(this);
  }
  onClickUnits() {
    var newUnits = null;

    if (this.props.units === 'metric') {
      newUnits = 'imperial';
    } else {
      newUnits = 'metric';
    }

    this.props.onChangeUnits(newUnits);
  }
  render() {

    let unitsButton = null;

    if (this.props.units === 'metric' && !this.props.isLoading) {
      unitsButton = <button className="button hollow small secondary button-center" type="button" onClick={this.onClickUnits}>&deg;C</button>;
    } else if (this.props.units === 'imperial' && !this.props.isLoading) {
      unitsButton = <button className="button hollow small secondary button-center" type="button" onClick={this.onClickUnits}>&deg;F</button>;
    }

    return (
      <div className="text-center">
        {unitsButton}
      </div>
    );
  }
}
