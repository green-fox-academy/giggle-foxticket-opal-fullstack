import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ShopTicketList from './ShopTicketList';

describe('Connect component to Redux store', () => {
  const mockStore = configureStore([]);
  const ticket = {
    tickets: [
      {
        id: 1,
        order_id: 1,
        user_id: 2,
        ticket_status: 'Valid ticket',
        expiration_date: '2020-06-06',
      },
    ],
  };

  const store = mockStore({ ticket });

  it('should render with given state from Redux store', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ShopTicketList />
      </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
