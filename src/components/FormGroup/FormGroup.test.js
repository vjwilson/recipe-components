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
});
