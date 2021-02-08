import React from 'react';
import Pin from './Pin';
import Ring from './Ring';

import classes from './Tower.Module.css'

const Tower = (props) => {
  const {amountOfRings} = props
  // console.log(props, amountOfRings);

  let rings = [];

  for (let i = 0; i < amountOfRings; i++){
    rings.push({
      size: i+1
    })
  }
  
  rings = rings.map(ring => (
    <Ring key={ring.size} size={ring.size}/>
  ))


  return ( 
    <div className={classes.Tower}>
      <Pin name={props.name}/>
      <div className={classes.Rings}>
        {rings}
      </div>
      {props.children}
    </div>
  );
}

export default Tower;