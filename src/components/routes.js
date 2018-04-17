import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './app';
import Signup from '../containers/signup';
import Markets from '../containers/markets';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ='/markets' component={Markets} />
        <Route exact path='/' component={App} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;
