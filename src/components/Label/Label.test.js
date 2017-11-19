import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

describe('Label', () => {
  test('should display a label with the supplied text', () => {
      const text = 'First Name';
      const id = 'firstName';

      const wrapper = shallow(
        <Label htmlFor={id} label={text} />
      );

      expect(wrapper.text()).toEqual(text);
  });

  test('should have a class for styling', () => {
      const text = 'First Name';
      const id = 'firstName';

      const wrapper = shallow(
        <Label htmlFor={id} label={text} />
      );

      expect(wrapper.hasClass('label')).toBe(true);
  });

  test('should display a required label with an added asterisk', () => {
      const text = 'First Name';
      const id = 'firstName';
      const required = true

      const wrapper = shallow(
        <Label htmlFor={id} label={text} required />
      );

      expect(wrapper.text()).toEqual(`${text} *`);
  });
});
