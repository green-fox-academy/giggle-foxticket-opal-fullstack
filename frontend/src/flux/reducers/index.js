import { combineReducers } from 'redux';
import ticketReducer from './ticketReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  ticket: ticketReducer,
  error: errorReducer,
  auth: authReducer,
});
