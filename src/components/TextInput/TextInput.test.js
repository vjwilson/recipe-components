import React from 'react';
import { mount } from 'enzyme';

import TextInput from './TextInput';

describe('TextInput', () => {
  test('should display a TextInput with the supplied label', () => {
    const id = 'firstName';
    const name = 'firstName';
    const label = 'First Name';
    const handler = () => {};

    const wrapper = mount(
      <TextInput
        id={id}
        name={name}
        label={label}
        onChange={handler}
      />
    );

    const labelChild = wrapper.find('label');

    expect(labelChild.text()).toEqual(label);
  });

  test('should call the supplied handler when an onChange event occurs', () => {
    const id = 'firstName';
    const name = 'firstName';
    const label = 'First Name';
    const handler = jest.fn();

    const wrapper = mount(
      <TextInput
        id={id}
        name={name}
        label={label}
        onChange={handler}
      />
    );
    const inputChild = wrapper.find('input');
    inputChild.simulate('change', { target: { value: 'A' } });

    expect(handler).toHaveBeenCalled();
  });

  test('should display an error message if given one', () => {
    const id = 'firstName';
    const name = 'firstName';
    const label = 'First Name';
    const handler = () => {};
    const error = 'This field is required.'

    const wrapper = mount(
      <TextInput
        id={id}
        name={name}
        label={label}
        onChange={handler}
        error={error}
      />
    );
    const errorChild = wrapper.find('.error');

    expect(errorChild.text()).toEqual(error);
  });
});
