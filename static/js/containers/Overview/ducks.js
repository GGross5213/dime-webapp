import * as api from './api'
import { takeEvery, takeLatest } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'

//actions
const GET_USER = 'GET_USER';
export const getUser = () => {
  return {
    type: GET_USER
  }
}

const RECEIVE_USER = 'RECEIVE_USER';
const receiveUser = (user, charities) => {
  return {
    type: RECEIVE_USER,
    user,
    charities
  };
};

const GET_USER_ERROR = 'GET_USER_ERROR';
const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    error
  }
}

// Add GEt charities
const GET_CHARITIES = 'GET_CHARITIES'
export const getCharities = () => {
  return {
    type: GET_CHARITIES
  };
}

const RECEIVE_CHARITIES = 'RECEIVE_CHARITIES';
const receiveCharities = (charities) => {
  return {
    type: RECEIVE_CHARITIES,
    charities
  }
}

const GET_CHARITIES_ERROR = 'GET_CHARITIES_ERROR';
const getCharitiesError = (error) => {
  return {
    type: GET_CHARITIES_ERROR,
    error
  };
}

const ADD_CHARITY = 'ADD_CHARITY';
export const addCharity = (charityId) => {
  return {
    type: ADD_CHARITY,
    charityId
  };
};

const ADD_CHARITY_ERROR = 'ADD_CHARITY_ERROR';
const addCharityError = (charityId) => {
  return {
    type: ADD_CHARITY_ERROR,
    charityId
  }
}

const REMOVE_CHARITY = 'REMOVE_CHARITY';
export const removeCharity = (charityId) => {
  return {
    type: REMOVE_CHARITY,
    charityId
  }
}

const REMOVE_CHARITY_ERROR = 'REMOVE_CHARITY_ERROR';
const removeCharityError = (charityId) => {
  return {
    type: REMOVE_CHARITY_ERROR,
    charityId
  }
}


//sagas
function* addCharitySaga(action){
  const {charityId} = action;
  const response = yield call(api.addCharity, charityId);
  if(response.error){
    yield put(addCharityError(charityId));
  }
}


function* removeCharitySaga(action){
  const {charityId} = action;
  const response = yield call(api.removeCharity, charityId);
  if(response.error){
    yield put(removeCharityError(charityId));
  }
}

function* getCharitiesSaga(){
  const response = yield call(api.getCharities);
  if(response.error){
    yield put(getCharitiesError(response.message))
  }
  else {
    yield put(receiveCharities(response.charities));
  }
}


function* getUserSaga(){
  const response = yield call(api.getUser);
  if(response.error){
    yield put(getUserError(response.message))
  }
  else {
    yield put(receiveUser(response.user, response.charities));
  }
}

export function* overviewSaga(){
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(GET_CHARITIES, getCharitiesSaga);
  yield takeEvery(ADD_CHARITY, addCharitySaga);
  yield takeEvery(REMOVE_CHARITY, removeCharitySaga);
}

const initialState = {
  isUserFetching: false,
  error: false,
  user: null,
  charities: [],
  userCharities: [],
  isCharitiesFetching: false
}

//reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_USER:
      return Object.assign({}, state, {
        isUserFetching: true
      })
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isUserFetching: false,
        user: action.user,
        userCharities: action.charities
      })
    case GET_USER_ERROR:
      return Object.assign({}, state, {
        isUserFetching: false,
        error: true,
        message: action.error
      })
    case GET_CHARITIES:
      return Object.assign({}, state, {
        isCharitiesFetching: true
      })
    case RECEIVE_CHARITIES:
      return Object.assign({}, state, {
        isCharitiesFetching: false,
        charities: action.charities
      })
    case GET_CHARITIES_ERROR:
      return Object.assign({}, state, {
        isCharitiesFetching: false,
        error: true,
        message: action.error
      });
    case ADD_CHARITY:
      return Object.assign({}, state, {
        userCharities: state.userCharities.concat(state.charities.find((charity) => charity.objectId == action.charityId))
      })
    case ADD_CHARITY_ERROR:
      return Object.assign({}, state, {
        userCharities: state.userCharities.filter((charity) => charity.objectId != action.charityId)
      })
    case REMOVE_CHARITY:
      return Object.assign({}, state, {
        userCharities: state.userCharities.filter((charity) => charity.objectId != action.charityId)
      })
    case REMOVE_CHARITY_ERROR:
    return Object.assign({}, state, {
      userCharities: state.userCharities.concat(state.charities.find((charity) => charity.objectId == action.charityId))
    })
    default:
      return state;
  }
}

export default reducer
