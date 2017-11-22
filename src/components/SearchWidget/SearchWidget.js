import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import MagnifyingGlassIcon from '../MagnifyingGlassIcon';

/** Display a search widget */
function SearchWidget({ value, onChange, onSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit(value);
    }
  }

  const handleClick = () => {
    onSubmit(value);
  }

  return (
    <div className="search-widget">
      <input
        className="search-widget-input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        onClick={handleClick}
      >
        <MagnifyingGlassIcon />
      </Button>
    </div>
  );
}

SearchWidget.propTypes = {
  /** Current value of the search input */
  value: PropTypes.string.isRequired,

  /** Called when there is a change in the text input of the search widget */
  onChange: PropTypes.func.isRequired,

  /** Called when search form is submitted */
  onSubmit: PropTypes.func
};

SearchWidget.defaultProps = {
  onSubmit: () => {}
}

export default SearchWidget;
