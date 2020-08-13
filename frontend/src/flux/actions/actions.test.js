import * as types from '../actions/types';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { loadUser, login, logout, register } from './authActions';
import configureMockStore from 'redux-mock-store';

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);
const store = mockStore({});

const user = { name: 'hello', email: 'hello@hello.com', password: 123123 };

describe('auth Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create REGISTER_SUCCESS', () => {
    const expectedActions = {
      type: types.REGISTER_SUCCESS,
      payload: user,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedActions });
    });

    return store.dispatch(register({})).then(() => {
      const newState = store.getActions();
      expect(newState[0].payload).toEqual(expectedActions);
    });
  });

  it('should create LOGIN_SUCCESS', () => {
    const expectedActions = {
      type: types.LOGIN_SUCCESS,
      payload: { name: user.name, password: user.password },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedActions });
    });

    return store.dispatch(login({})).then(() => {
      const newState = store.getActions();
      expect(newState[0].payload).toEqual(expectedActions);
    });
  });

  it('should create LOGOUT_SUCCESS', () => {
    const expectedActions = {
      type: types.LOGOUT_SUCCESS,
    };

    store.dispatch(logout());
    const newState = store.getActions();
    expect(newState[0]).toEqual(expectedActions);
  });

  it('should create USER_LOADED', () => {
    const expectedActions = {
      type: types.USER_LOADED,
      payload: { name: user.name, password: user.password },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedActions });
    });

    return store.dispatch(loadUser({})).then(() => {
      const newState = store.getActions();
      expect(newState[0].payload).toEqual(expectedActions);
    });
  });

  it('should create LOGIN_FAIL', () => {
    const expectedActions = {
      type: types.LOGIN_FAIL,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 404, response: expectedActions });
    });

    return store.dispatch(login({})).then(() => {
      const newState = store.getActions();
      expect(newState[0].payload.message).toEqual(expectedActions);
    });
  });

  it('should create REGISTER_FAIL', () => {
    const expectedActions = {
      type: types.REGISTER_FAIL,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 404, response: expectedActions });
    });

    return store.dispatch(register({})).then(() => {
      const newState = store.getActions();
      expect(newState[0].payload.message).toEqual(expectedActions);
    });
  });
});
