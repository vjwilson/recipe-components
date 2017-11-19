import React from 'react';
import Label from 'recipe-components/Label';

/** Required label */
export default function LabelRequired() {
  return (
    <Label htmlFor="email_address" label="Email" required />
  );
}
