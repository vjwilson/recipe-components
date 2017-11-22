import React from 'react';
import PropTypes from 'prop-types';

/** Display a button for an action to be taken */
function Button({ onClick, children, square }) {
  const buttonClass = (square)
    ? 'btn btn-square'
    : 'btn';

  return (
    <button
      onClick={onClick}
      className={buttonClass}
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
  ]).isRequired,

  /** Flag to make the button square */
  square: PropTypes.bool
};

Button.defaultProps = {
  square: false
};

export default Button;
