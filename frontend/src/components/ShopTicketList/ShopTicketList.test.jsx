import React from 'react';
import ShopTicketList from './ShopTicketList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ShopTicketList />).toJSON();
  expect(tree).toMatchSnapshot();
});
