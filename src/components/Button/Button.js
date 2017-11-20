import React from 'react';
import PropTypes from 'prop-types';

/** Display a button for an action to be taken */
function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="btn"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /** Called when button is clicked */
  onClick: PropTypes.func.isRequired,

  /** Content to display inside the button */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
}

export default Button;
