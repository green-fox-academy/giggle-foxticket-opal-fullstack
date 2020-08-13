import * as types from '../actions/types';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { login, register } from './authActions';
import configureMockStore from 'redux-mock-store';

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);
const store = mockStore({});

let user = { name: 'hello', email: 'hello@hello.com', password: 123123 };

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

    store.dispatch(login({})).then(() => {
      const newState = store.getActions();
      console.debug(store);

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

    store.dispatch(login({})).then(() => {
      const newState = store.getActions();
      expect(newState).toEqual(expectedActions[0].type);
    });
  });

  it('should create REGISTER_FAIL', () => {
    const expectedActions = [
      {
        type: types.REGISTER_FAIL,
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 404, response: expectedActions });
    });

    store.dispatch(register({})).then(() => {
      const newState = store.getActions();
      expect(newState[2].payload.id).toEqual(expectedActions[0].type);
    });
  });
});
