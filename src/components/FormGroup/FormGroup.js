import React from 'react';
import PropTypes from 'prop-types';

/** Display a list of form fields vertically */
function FormGroup({ horizontal, children }) {
  const formGroupClass = (horizontal)
    ? 'form-group horizontal-form-group'
    : 'form-group';

  return (
    <div className={formGroupClass}>
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  /** Content to display inside the form group */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  /** Display the form group horizontally, instead of vertically */
  horizontal: PropTypes.bool
}

FormGroup.defaultProps = {
  horizontal: false
}

export default FormGroup;
