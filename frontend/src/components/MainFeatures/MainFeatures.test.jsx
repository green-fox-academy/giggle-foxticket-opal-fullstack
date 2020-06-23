import React from 'react';
import { shallow } from 'enzyme';
import MainFeatures from './MainFeatures';

it('expect to render Main Features component', () => {
  expect(shallow(<MainFeatures />)).toMatchSnapshot();
});
