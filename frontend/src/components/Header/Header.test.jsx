import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Connect component to Redux store', () => {
  Storage.prototype.getItem = jest.fn(() => 'token');
  const mockStore = configureStore([]);
  const user = {
    name: 'Someone',
    isAdmin: true
  }
  const store = mockStore({ user });

  it('should render with given state from Redux store', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>)
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
