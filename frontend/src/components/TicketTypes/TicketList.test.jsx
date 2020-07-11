import React from 'react';
import TicketList from './TicketList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<TicketList />).toJSON();
  expect(tree).toMatchSnapshot();
});
