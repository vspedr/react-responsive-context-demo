import React from 'react';
import Responsive from 'react-responsive';

const Desktop = props => (
  <Responsive {...props} minWidth={961} />
);
const Mobile = props => (
  <Responsive {...props} maxWidth={960} />
);

export { Desktop, Mobile };
