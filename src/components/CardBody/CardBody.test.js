import React from 'react';
import { shallow } from 'enzyme';

import CardBody from './CardBody';

describe('CardBody', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <CardBody>
          <div>Ingredients</div>
          <div>Directions</div>
        </CardBody>
      );

      expect(wrapper.children()).toHaveLength(2);
  });

  test('should have the appropriate class', () => {
      const wrapper = shallow(
        <CardBody>
          <div>Ingredients</div>
          <div>Directions</div>
        </CardBody>
      );

      expect(wrapper.hasClass('card-body')).toBe(true);
  });
});
