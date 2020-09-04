import React from 'react';
import TicketStore from './TicketStore';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<TicketStore />).toJSON();
  expect(tree).toMatchSnapshot();
});
