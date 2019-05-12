import React, { forwardRef } from 'react';

const withRef = (Component, display = 'inline-block') => forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ display }}>
      <Component {...props} />
    </div>
  );
});

export default withRef;
