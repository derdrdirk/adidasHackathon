import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Client from './Client';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/client/:id' component={Client} />
  </Switch>
)

export default App;