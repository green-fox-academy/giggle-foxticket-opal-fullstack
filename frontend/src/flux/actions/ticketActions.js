import {
  ADD_TICKET,
  DELETE_TICKET,
  DOWNLOADING_TICKETS,
  GET_TICKETS,
  UPDATE_TICKET,
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

export const addTicket = ticket_type_id => (dispatch, getState) => {
  axios
    .post(
      `${BACKEND_URL}api/orders`,
      { ticket_type_id: ticket_type_id },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_TICKET,
        payload: res.data.savedTicket,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateTicket = (order_id, status) => (dispatch, getState) => {
  axios
    .patch(`${BACKEND_URL}api/orders/${order_id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: UPDATE_TICKET,
        payload: res.data.status,
      })
    )
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
