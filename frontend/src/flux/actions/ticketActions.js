import { ADD_TICKET, DELETE_TICKET, GET_TICKETS } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';

export const getTickets = dispatch => {
  axios
    .get('/api/tickets')
    .then(res => dispatch({ type: GET_TICKETS, payload: res.data }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addTicket = ticket => (dispatch, getState) => {
  axios
    .post('/api/tickets', ticket, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_TICKET,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteTicket = id => (dispatch, getState) => {
  axios
    .delete(`/api/tickets/${id}`, tokenConfig(getState))
    .then(() =>
      dispatch({
        type: DELETE_TICKET,
        payload: id,
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
