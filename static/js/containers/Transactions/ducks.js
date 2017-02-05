import * as api from './api'
import { takeEvery, takeLatest } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'

//actions
const UPDATE_BALANCE = 'UPDATE_BALANCE';
const updateBalance = (balance) => {
  return {
    type: UDPATE_BALANCE,
    balance
  }
}

const UPDATE_BALANCE_ERROR = 'UPDATE_BALANCE_ERROR';
const updateBalanceError = (balance) = > {
  return {
    type: UPDATE_BALANCE_ERROR,
    balance
  };
};

const GET_ACCESS_TOKEN = 'GET_ACCESS_TOKEN';
const getAccessToken = () => {
  return {
    type: GET_ACCESS_TOKEN
  }
}

const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';
const receiveAccessToken = () => {
  return {
    type: RECEIVE_ACCESS_TOKEN
  }
}

const ACCESS_TOKEN_ERROR = 'ACCESS_TOKEN_ERROR';
const accessTokenError = () => {
  return {
    type: ACCESS_TOKEN_ERROR
  }
}

const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
const getTransactions = () => {
  return {
    type: GET_TRANSACTIONS
  }
}

const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
const receiveTransactions = (transactions) => {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions
  }
}

const TRANSACTION_ERROR = 'TRANSACTION_ERROR';
const transactionError = () => {
  return {
    type: TRANSACTION_ERROR
  }
}


//sagas
function* getAccessTokenSaga(){
  const response = yield call(api.getUserAccessToken);
  if(response.error){
    yield put(accessTokenError());
  }
  else {
    yield put(getTransactions());
  }
}

function* getTransactionsSaga(){
  const response = yield call(api.getTransactions);
  if(response.error){
    yield put(transactionError());
  }
  else {
    yield put(receiveTransactions(response.transactions));
  }
}

function* updateBalanceSaga(action){
  const response = yield call(api.updateBalance, action.balance);
  if(response.error){
    yield put(updateBalanceError(action.balance));
  }
}

export function* transactionSaga(){
  yield takeLatest(GET_ACCESS_TOKEN, getAccessTokenSaga);
  yield takeLatest(GET_TRANSACTIONS, getTransactions);
  yield takeLatest(UPDATE_BALANCE, updateBalance);
}

const initialState = {
  transactions: [],
  isFetching: false,
  error: false
};
