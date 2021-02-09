import React from 'react';

import classes from './Statistics.Module.css';

const Statistics = (props) => {
  function exponentiation(number) {
    let x = 2;
    if (number === 1) {
      return x;
    }
    return x * exponentiation(number - 1);
  }

  return (
    <div className={classes.Statistics}>
      <p className={classes.Paragraph}>
        Liczba Twoich ruchów: <strong>{props.count}</strong>
      </p>
      <p className={classes.Paragraph}>
        Minimalna liczba ruchów, potrzebna do rozwiązania tej układanki:{' '}
        <strong>{exponentiation(props.initialAmount) - 1}</strong>
      </p>
    </div>
  );
};

export default Statistics;
