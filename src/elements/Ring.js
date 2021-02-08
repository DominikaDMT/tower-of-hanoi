import React from 'react';

import classes from './Ring.Module.css';


const Ring = (props) => {
  return (  
    <div className={classes.Ring} style={{width: `${(props.size * 5) + 15}%`}}>
      {props.size}
    </div>

  );
}

export default Ring;