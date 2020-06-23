import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

describe('Test Button component', () => {
  it('should render Button component', () => {
    expect(shallow(<Button />).length).toEqual(1);
    expect(shallow(<Button />)).toMatchSnapshot();
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
