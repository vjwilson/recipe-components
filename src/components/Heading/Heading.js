import React from 'react';
import PropTypes from 'prop-types';

/** Heading with outline level */
function Heading({ level, children }) {
  const numberLevel = parseInt(level, 10);

  switch (numberLevel) {
    case 6:
      return (
        <h6 className="heading heading6">
          {children}
        </h6>
      );
    case 5:
      return (
        <h5 className="heading heading5">
          {children}
        </h5>
      );
    case 4:
      return (
        <h4 className="heading heading4">
          {children}
        </h4>
      );
    case 3:
      return (
        <h3 className="heading heading3">
          {children}
        </h3>
      );
    case 2:
      return (
        <h2 className="heading heading2">
          {children}
        </h2>
      );
    case 1:
    default:
       return (
        <h1 className="heading heading1">
          {children}
        </h1>
      );
  }
}

Heading.propTypes = {
  /** Outline level  */
  level: PropTypes.number.isRequired,

  /** Content to display inside the heading */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Heading;
