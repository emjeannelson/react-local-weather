import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <IndexLink to="/" activeClassName="active" className="menu-text">Show Local Weather</IndexLink>
            <Link to="favorites" activeClassName="active" className="menu-text">Your Saved Locations</Link>
            <Link to="about" activeClassName="active" className="menu-text">About</Link>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="http://www.emilynelson.us" target="_blank">Emily Nelson</a></li>
          </ul>
        </div>
      </div>
    );
    /**
    <nav class="top-bar" data-topbar role="navigation">
      <ul class="title-area">
        <li class="name">
          <h1><a href="#">My Site</a></h1>
        </li>
        <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
      </ul>

      <section class="top-bar-section">
        <ul class="right">
          <li class="active"><a href="#">Right Button Active</a></li>
          <li class="has-dropdown">
            <a href="#">Right Button Dropdown</a>
              <ul class="dropdown">
                <li><a href="#">First link in dropdown</a></li>
                <li class="active"><a href="#">Active link in dropdown</a></li>
              </ul>
            </li>
          </ul>

          <ul class="left">
            <li><a href="#">Left Nav Button</a></li>
          </ul>
        </section>
    </nav>
    **/
  }
}
