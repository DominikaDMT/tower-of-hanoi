import React from 'react';

import classes from './Pin.Module.css';
import Ring from './Ring'

const Pin = (props) => {
  return ( 
    <div className={classes.Pin} name={props.name}>
    </div>
  )
}


export default Pin;