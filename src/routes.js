import React from 'react';
import { Router, Route } from 'react-router';

import App from './routes/App';
import About from './routes/About';
import NotFound from './routes/NotFound';
import JSONConcat from './routes/JSONConcat';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/jsonconcat" component={JSONConcat} />
    {/* Anything after this path will be redirected to Not Found */}
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;