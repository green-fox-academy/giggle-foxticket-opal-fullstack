import axios from 'axios';
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from './types';
import { returnErrors } from './errorActions';

const BACKEND_URL = 'http://localhost:3000';

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get(
      `${BACKEND_URL}/api/users`,
      tokenConfig(getState)
    );
    return dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(`${BACKEND_URL}/api/users`, body, config);
    return dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
    );
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = ({ username, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(`${BACKEND_URL}/api/session`, body, config);
    return dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const tokenConfig = getState => {
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['authorization'] = `Bearer ${token}`;
  }

  return config;
};
