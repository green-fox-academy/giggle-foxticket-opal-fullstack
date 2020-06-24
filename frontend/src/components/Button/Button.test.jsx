import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

describe('Test Button component', () => {
  it('should render Button component', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(shallow(<Button />).length).toEqual(1);
  });

  const mockCallBack = sinon.spy();
  const mockChildren = 'Click me';
  const mockSize = 'btn--large';
  const mockStyle = 'btn--warning--outline';

  it('simulates click events', () => {
    const button = shallow(
      <Button
        type="button"
        buttonSize={mockSize}
        buttonStyle={mockStyle}
        onClick={mockCallBack}
      >
        {mockChildren}
      </Button>
    );

    button.find('button').simulate('click');

    expect(mockCallBack).toHaveProperty('callCount', 1);
  });

  it('should contain provided className', () => {
    const button = renderer.create(
      <Button buttonSize={mockSize} buttonStyle={mockStyle} />
    );

    expect(JSON.stringify(button)).toContain(`btn ${mockStyle} ${mockSize}`);
  });
});
