import React from 'react';
import PropTypes from 'prop-types';

/** Display a list of form fields vertically */
function FormGroup({ children }) {
  return (
    <div className="form-group">
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  /** Content to display inside the form group */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
}

export default FormGroup;
