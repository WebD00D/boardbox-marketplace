import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './App';
import Order from './Order';
import NotFound from './NotFound';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="order" component={Order}/>
      <Route path="*" component={NotFound}/>
    </Router>,
  document.getElementById('root')
);


{/* <Route path="users/:" component={Users}>
  <Route path="/user/:userId" component={User}/>
</Route> */}
