import React from 'react';
import TicketStore from './TicketStore';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


describe('Connect component to Redux store', () => {
  const mockStore = configureStore([]);
  const user = { name: 'Someone' }
  const store = mockStore({ user });

  it('should render with given state from Redux store', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <TicketStore />
        </Provider>
      </BrowserRouter>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
