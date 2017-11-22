import React from 'react';
import Heading from 'recipe-components/Heading';

/** Headings (all levels) */
export default function HeadingExample() {
  return (
    <div>
      <Heading level="1">
        Desserts (Level 1 Heading)
      </Heading>
      <Heading level="2">
        Pies and Cakes (Level 2 Heading)
      </Heading>
      <Heading level="3">
        Pies (Level 3 Heading)
      </Heading>
      <Heading level="4">
        Apple Pies (Level 4 Heading)
      </Heading>
      <Heading level="5">
        Granny Smith Apple Pies (Level 5 Heading)
      </Heading>
      <Heading level="6">
        Granny Smith Bourbon Apple Pie (Level 6 Heading)
      </Heading>
    </div>
  );
}
