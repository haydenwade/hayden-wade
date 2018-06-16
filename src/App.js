import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './areas/home/home';
import Spinner from './areas/reactSpinner/spinner';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/spinner' component={Spinner} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;

