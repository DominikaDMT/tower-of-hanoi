import React from 'react';

import classes from './Ring.Module.css';

const Ring = (props) => {
  return (
    <div
      className={classes.Ring}
      style={{ width: `${props.size * 5 + 15}%` }}
      onClick={() => props.selectRing(props.size, props.pinName)}
    >
      {/* {props.size} */}
    </div>
  );
};

export default Ring;
