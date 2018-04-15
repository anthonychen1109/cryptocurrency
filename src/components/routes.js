import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './app';
import Signup from '../containers/signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path="/signup" component={Signup} />
      </div>
    </BrowserRouter>
  )
}


export default Routes;
