import React from 'react';

import Nav from 'Nav';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Hello from React</h1>
        {this.props.children}
      </div>
    );
  }
}
