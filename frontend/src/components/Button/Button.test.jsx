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

  it('simulates click events', () => {
    const mockCallBack = sinon.spy();
    const mockChildren = 'Click me';

    const button = shallow(
      <Button
        type="button"
        buttonSize="btn--large"
        buttonStyle="btn--warning--outline"
        onClick={mockCallBack}
      >
        {mockChildren}
      </Button>
    );

    button.find('button').simulate('click');
    expect(mockCallBack).toHaveProperty('callCount', 1);
  });
});
