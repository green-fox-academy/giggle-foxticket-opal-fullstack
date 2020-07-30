import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
test('first snapshot of Login', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
