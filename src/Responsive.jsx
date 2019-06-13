import React from 'react';
import MediaQuery from 'react-responsive';

const Desktop = props => (
  <MediaQuery {...props} minWidth={961} />
);
const Mobile = props => (
  <MediaQuery {...props} maxWidth={960} />
);

export { Desktop, Mobile };
