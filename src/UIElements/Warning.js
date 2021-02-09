import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Warning.Module.css';

const Warning = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.Warning}>
      <p className={classes.Paragraph}>{props.children}</p>
    </div>,
    document.getElementById('warning')
  );
};

export default Warning;
