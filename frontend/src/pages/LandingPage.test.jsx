import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

it('expect to render Button component', () => {
  expect(shallow(<LandingPage />).length).toEqual(1);
});
