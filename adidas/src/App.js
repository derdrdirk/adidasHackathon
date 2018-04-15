import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Client from './Client';

const App = () => (
  <React.Fragment>
    <Navbar />
    <div className="wrapper">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/client/:id' component={Client} />
      </Switch>
    </div>
  </React.Fragment>
)

export default App;