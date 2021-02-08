import React from 'react';
import Pin from './Pin';
import Ring from './Ring';

import classes from './Tower.Module.css';

const Tower = (props) => {
  let rings = props.rings;


  if (rings.length > 0) {
    rings = rings.map((ring, index) => <Ring key={ring} size={ring} selectRing={props.selectRing} pinName={props.name}/>);
  }

  return (
    <div className={classes.Tower}>
      <Pin name={props.name} selectPin={props.selectPin}/>
      <div className={classes.Rings}>
        {rings}
        </div>
      {props.children}
    </div>
  );
};

export default Tower;
