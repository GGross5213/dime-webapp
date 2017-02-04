import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const DimeApp = combineReducers({
    routing: routerReducer
});

export default DimeApp
