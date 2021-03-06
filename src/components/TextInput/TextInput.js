import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput({
  id,
  name,
  label,
  type = 'text',
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  ...props
}) {
  return (
    <div className='field text-input'>
      <Label htmlFor={id} label={label} required={required} />
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='text-input-control'
        style={error && { border: '1px solid red' }}
        {...props} />
        <div>
          {children}
        </div>
      {error && <div className="error" style={{color: 'red'}}>{error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  id: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInput;
