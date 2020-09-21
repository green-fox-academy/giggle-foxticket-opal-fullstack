import authReducer from './authReducer';
import ticketReducer from './ticketReducer';
import {
  ADD_TICKET,
  DELETE_TICKET,
  GET_TICKETS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADING,
} from '../actions/types';

describe('authenticate reducer', () => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    isAdmin: false
  };

  const loggedInFailState = {
    token: null,
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isAdmin: false
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle login request', () => {
    expect(authReducer(initialState, { type: USER_LOADING })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle login failure', () => {
    expect(authReducer(initialState, { type: LOGIN_FAIL })).toEqual({
      ...loggedInFailState,
    });
  });

  it('should handle a successful login', () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
        payload: { user: { name: 'Marci', password: 123123 } },
      })
    ).toEqual({
      ...initialState,
      isAuthenticated: true,
      user: { name: 'Marci', password: 123123 },
    });
  });
});

describe('ticket reducer', () => {
  const initialState = {
    tickets: [],
  };

  const mockTickets = ['ticket-one', 'ticket-two', 'ticket-three'];

  it('should return the initial state', () => {
    expect(ticketReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle getting the tickets', () => {
    expect(
      ticketReducer(initialState, {
        type: GET_TICKETS,
        payload: mockTickets,
      })
    ).toEqual({
      ...initialState,
      tickets: mockTickets,
    });
  });

  it('should handle adding a ticket', () => {
    expect(
      ticketReducer(initialState, {
        type: ADD_TICKET,
        payload: [...mockTickets],
      })
    ).toEqual({
      ...initialState,
      tickets: [mockTickets],
    });
  });

  it('should handle deleting a ticket', () => {
    expect(
      ticketReducer(initialState, {
        type: DELETE_TICKET,
        payload: { tickets: 'ticket-one' },
      })
    ).toEqual({ ...initialState, tickets: [] });
  });
});
