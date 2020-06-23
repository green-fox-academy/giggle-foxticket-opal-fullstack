import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('expect to render Button component', () => {
  expect(shallow(<Button />).length).toEqual(1);
});
