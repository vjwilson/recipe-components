import React from 'react';
import { mount } from 'enzyme';

import SearchWidget from './SearchWidget';

describe('SearchWidget', () => {
  test('should render a text input', () => {
    const wrapper = mount(
      <SearchWidget
        value=""
        onChange={() => {}}
      />
    );

    const inputElement = wrapper.find('input');

    expect(inputElement.hasClass('search-widget-input')).toBe(true);
  });

  test('should render its value prop in its input child', () => {
    const currentValue = 'cake';
    const wrapper = mount(
      <SearchWidget
        value={currentValue}
        onChange={() => {}}
      />
    );

    const inputElement = wrapper.find('input');

    expect(inputElement.prop('value')).toEqual(currentValue);
  });

  test('should call an update handler on change', () => {
    const handler = jest.fn();
    const wrapper = mount(
      <SearchWidget
        value=""
        onChange={handler}
      />
    );
    const inputElement = wrapper.find('input');

    const mockEvent1 = { target: { value: 'c' } };
    const mockEvent2 = { target: { value: 'ca' } };
    inputElement.simulate('change', mockEvent1);
    inputElement.simulate('change', mockEvent2);

    expect(handler.mock.calls).toHaveLength(2);
    expect(handler.mock.calls[0][0].target).toBe(mockEvent1.target);
    expect(handler.mock.calls[1][0].target).toBe(mockEvent2.target);
  });

  test('should call submit handler with current value when Enter key pressed', () => {
    const currentValue = 'cake';
    const submitHandler = jest.fn();
    const wrapper = mount(
      <SearchWidget
        value={currentValue}
        onChange={() => {}}
        onSubmit={submitHandler}
      />
    );
    const inputElement = wrapper.find('input');

    const mockKeyPress = { key: 'Enter' };
    inputElement.simulate('keyPress', mockKeyPress);

    expect(submitHandler.mock.calls).toHaveLength(1);
    expect(submitHandler.mock.calls[0][0]).toEqual(currentValue);
  });
});
