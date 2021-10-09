import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import auth from './authentication';
import students from './students';

const appReducer = combineReducers({
  auth,
  students,
});

const store = createStore(
  appReducer,
  {},
  compose(applyMiddleware(thunk, logger)),
);

export default store;
