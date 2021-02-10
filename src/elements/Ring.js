import React from 'react';

import classes from './Ring.Module.css';

const Ring = (props) => {
  let ratio;
  if (props.initialAmount === 3) {
    ratio = 20;
  } else if (props.initialAmount < 6) {
    ratio = 15;
  } else {
    ratio = 10;
  }

  let allClasses;
  if (props.selectedRing === props.size) {
    allClasses = `${classes.Ring} ${classes.active}`
  } else {
    allClasses = `${classes.Ring}`
  }

  return (
    <div
      className={allClasses}
      style={{ width: `${props.size * ratio + 15}%` }}
      onClick={() => props.selectRing(props.size, props.pinName)}
    >
      {/* {props.size} */}
    </div>
  );
};

export default Ring;
