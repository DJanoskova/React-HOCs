/* eslint-disable no-console */

import React, { useEffect } from 'react';

const withDebug = (Component, name, color = 'blue') => props => {
  console.log(`%c[${name} before refresh]`, `color: ${color}`);

  useEffect(() => {
    console.log(`%c[${name} mount]`, `color: ${color}`);
    return () => {
      console.log(`%c[${name} unmount]`, `color: ${color}`);
    };
  }, []);

  useEffect(() => {
    console.log(`%c[${name} refresh]`, `color: ${color}`);
  });

  return <Component {...props} />;
};

export default withDebug;
