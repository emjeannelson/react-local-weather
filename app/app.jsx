import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from 'Main';
import About from 'About';
import Favorites from 'Favorites';
import LocalWeather from 'LocalWeather';

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={LocalWeather} />
      <Route path="favorites" component={Favorites}/>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
