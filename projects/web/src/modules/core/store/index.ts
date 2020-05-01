import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './auth';

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducers, composeWithDevTools());
