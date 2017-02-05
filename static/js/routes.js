import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './containers/App'
import Overview from './containers/Overview/Overview'
import Transaction from './containers/Transactions/Transaction'
import Charities from './containers/Charities/Charities'
import Donate from './containers/Donate/Donate'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Overview}/>
      <Route path="/transactions" component={Transaction}/>
      <Route path="/charities" component={Charities}/>
      <Route path="/donate" component={Donate}/>
    </Route>
)
