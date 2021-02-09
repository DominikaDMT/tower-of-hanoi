import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Backdrop.Module.css';
import Intro from './Intro';

const Backdrop = (props) => {
  return (
    ReactDOM.createPortal(
      <div className={classes.Backdrop}>
        {props.children}
      </div>, document.getElementById('backdrop')
    )
  );
};

export default Backdrop;
