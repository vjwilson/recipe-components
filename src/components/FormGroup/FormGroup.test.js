import React from 'react';
import { shallow } from 'enzyme';

import FormGroup from './FormGroup';

describe('FormGroup', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <FormGroup>
          <div>Input 1</div>
          <div>Input 2</div>
          <div>Input 3</div>
        </FormGroup>
      );

      expect(wrapper.children()).toHaveLength(3);
  });

  test('should include an extra class if its horizontal flag is set', () => {
      const wrapper = shallow(
        <FormGroup
          horizontal
        >
          <div>Input 1</div>
          <div>Input 2</div>
          <div>Input 3</div>
        </FormGroup>
      );

      expect(wrapper.hasClass('horizontal-form-group')).toBe(true);
  });
});
