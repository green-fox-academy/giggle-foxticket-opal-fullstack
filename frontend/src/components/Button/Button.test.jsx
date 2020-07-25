import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

describe('Test Button component', () => {
  it('should render Button component', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(shallow(<Button />).length).toEqual(1);
  });

  const mockCallBack = sinon.spy(),
    mockChildren = 'Click me',
    mockSize = 'btn--large',
    mockStyle = 'btn--warning--outline',
    mockClassName = `btn ${mockStyle} ${mockSize}`;

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

  it('allows us to set className with props', () => {
    const button = mount(<Button className={mockClassName} />);
    expect(button.props().className).toEqual(mockClassName);
    button.setProps({ className: mockClassName });
    expect(button.props().className).toEqual(mockClassName);
  });
});
