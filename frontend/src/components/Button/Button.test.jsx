import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('expect to render Button component', () => {
  expect(shallow(<Button />)).toMatchSnapshot();
});

it('should render with valid props provided', () => {
  const mockChildren = 'Click me';
  const mockClick = console.log('I got clicked!');
  const mockStyles = ['btn--primary--solid', 'btn--warning--solid'];
  const mockSizes = ['btn--medium', 'btn--large'];
  const mockTypes = ['button', 'submit'];
  expect(
    shallow(
      <Button
        className={`btn ${mockStyles} ${mockSizes}`}
        onClick={mockClick}
        type={mockTypes}
      >
        {mockChildren}
      </Button>
    )
  ).toMatchSnapshot();
});

it('should not throw an error with invalid style or size props', () => {
  const mockChildren = 'Click me';
  const mockClick = console.log('I got clicked!');
  const mockStyles = ['I am not valid', 'Value should be reverted to default'];
  const mockSizes = ['I am not valid', 'Value should be reverted to default'];
  const mockTypes = ['button', 'submit'];
  expect(
    shallow(
      <Button
        className={`btn ${mockStyles} ${mockSizes}`}
        onClick={mockClick}
        type={mockTypes}
      >
        {mockChildren}
      </Button>
    )
  ).toMatchSnapshot();
});
