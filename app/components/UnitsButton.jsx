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

    if (this.props.units === 'metric') {
      unitsButton = <button onClick={this.onClickUnits}>C&deg;</button>;
    } else {
      unitsButton = <button onClick={this.onClickUnits}>F&deg;</button>;
    }

    return (
      <div>
        {unitsButton}
      </div>
    );
  }
}
