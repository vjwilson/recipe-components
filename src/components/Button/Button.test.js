import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  test('should call the given handler when clicked', () => {
    const mockHandler = jest.fn();

      const wrapper = shallow(
        <Button onClick={mockHandler}>
          Click Me
        </Button>
      );
      wrapper.simulate('click');

      expect(mockHandler).toHaveBeenCalled();
  });
});
