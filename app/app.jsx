import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import About from 'About';
import Favorites from 'Favorites';
import Weather from 'Weather';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route component={Weather}>
        <IndexRoute />
        <Route path="favorites" component={Favorites}/>
      </Route>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
