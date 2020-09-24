import {
  ADD_TICKET,
  DELETE_TICKET,
  GET_TICKETS,
  DOWNLOADING_TICKETS,
} from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';

const BACKEND_URL = 'http://localhost:3000/';

export const getTickets = (dispatch, getState) => {
  dispatch({ type: DOWNLOADING_TICKETS });

  axios
    .get(`${BACKEND_URL}api/tickets`, tokenConfig(getState))
    .then(res => dispatch({ type: GET_TICKETS, payload: res.data }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addTicket = ticket => (dispatch, getState) => {
  axios
    .post(`${BACKEND_URL}api/orders`, ticket, tokenConfig(getState))
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
