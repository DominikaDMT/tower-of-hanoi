import React from 'react';
import Ring from './Ring';

import classes from './Tower.Module.css';

const Tower = (props) => {
  let rings = props.rings;

  if (rings.length > 0) {
    rings = rings.map((ring, index) => (
      <Ring
        key={ring}
        size={ring}
        selectRingByClick={props.selectRingByClick}
        selectRingByDrag={props.selectRingByDrag}
        pinName={props.name}
        initialAmount={props.initialAmount}
        selectedRing={props.selectedRing}
      />
    ));
  }

  const handleDragEnter = (e) => {
    if (e.dataTransfer.types[0] === 'text/plain') {
      e.preventDefault();
    }
  };
  const handleDragOver = (e) => {
    if (e.dataTransfer.types[0] === 'text/plain') {
      e.preventDefault();
    }
  };

  const handleDrop = (e) => {
    const ringId = e.dataTransfer.getData('text/plain');
    if (rings.find((ring) => ring.key === ringId)) {
      return;
    }
    props.selectPin(props.name);
  };

  return (
    <div className={classes.Tower}>
      <div className={classes.Pin} name={props.name}></div>
      <div
        className={classes.Rings}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
        onClick={() => props.selectPin(props.name)}
        style={{ zIndex: 5 }}
      >
        {rings}
      </div>
      {props.children}
    </div>
  );
};

export default Tower;
