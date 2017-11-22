import React from 'react';
import Button from 'recipe-components/Button';

/** Square Button with single Unicode character */
export default function ExampleButtonSquare() {
  return (
    <Button
      onClick={() => {}}
      square
    >
      <strong>&#x2715;</strong>
    </Button>
  );
}
