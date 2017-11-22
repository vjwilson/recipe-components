import React from 'react';
import Button from 'recipe-components/Button';
import MagnifyingGlassIcon from 'recipe-components/MagnifyingGlassIcon';

/** Square Button with icon component */
export default function ExampleButtonSquareWithIcon() {
  return (
    <Button
      onClick={() => {}}
      square
    >
      <MagnifyingGlassIcon />
    </Button>
  );
}
