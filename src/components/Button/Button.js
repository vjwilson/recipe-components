import React from 'react';
import PropTypes from 'prop-types';

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
