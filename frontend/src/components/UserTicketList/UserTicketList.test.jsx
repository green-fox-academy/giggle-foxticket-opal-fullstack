import React from 'react';
import renderer from 'react-test-renderer';
import UserTicketList from './UserTicketList';

it('renders correctly', () => {
  const tree = renderer.create(<UserTicketList />).toJSON();
  expect(tree).toMatchSnapshot();
});
