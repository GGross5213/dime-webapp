import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import Root from './containers/Root'
import reducer from './reducer'
import rootSaga from './saga'
import createSagaMiddleware from 'redux-saga'

import { eventsRequested } from './containers/app/ducks'

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware, loggerMiddleware)
);

const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(rootSaga);

store.dispatch(eventsRequested());

render(
    <Root store={store} history={history}/>,
    document.getElementById('root')
);
