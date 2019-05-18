/* eslint-disable no-console */

import React, { useEffect } from 'react';

const withDebug = (Component, name) => props => {
  console.log(`[${name} refresh]`);

  useEffect(() => {
    console.log(`[${name} mount]`);
    return () => {
      console.log(`[${name} unmount]`);
    }
  });

  return <Component {...props} />;
};

export default withDebug;
