import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import About from 'About';
import Examples from 'Examples';
import Weather from 'Weather';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component={Main}>
      <IndexRoute component={Weather} />
      <Route path = "about" component={About} />
      <Route path = "examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
