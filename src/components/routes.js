import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './app';
import Signup from '../containers/signup';
import Markets from '../containers/markets';
import SingleDisplayCoin from '../containers/single_display_coin';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ='/markets' component={Markets} />
        <Route path='/search' component={SingleDisplayCoin} />
        <Route exact path='/' component={App} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;
