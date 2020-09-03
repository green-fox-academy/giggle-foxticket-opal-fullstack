import React from 'react';
import AdminPage from './AdminPage';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('Connect component to Redux store', () => {
  const mockStore = configureStore([]);
  const user = { name: 'Someone' }
  const store = mockStore({ user });

  it('should render with given state from Redux store', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <AdminPage />
        </Provider>
      </BrowserRouter>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
