import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './containers/App'
import Overview from './containers/Overview/Overview'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Overview}/>
    </Route>
)
