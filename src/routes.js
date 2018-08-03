import React from 'react';
import { Router, Route } from 'react-router';

import App from './routes/App';
import Concat from './routes/Concat';
import NotFound from './routes/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/concatenate" component={Concat} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;