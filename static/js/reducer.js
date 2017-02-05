import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import overview from './containers/Overview/ducks';

const DimeApp = combineReducers({
    overview,
    routing: routerReducer
});

export default DimeApp
