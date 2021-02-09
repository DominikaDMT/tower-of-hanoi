import React from 'react';
import Backdrop from './Backdrop';
import Button from './Button';

import classes from './Statistics.Module.css';

const Statistics = (props) => {
  function exponentiation(number) {
    let x = 2;
    if (number === 1) {
      return x;
    }
    return x * exponentiation(number - 1);
  }

  const minNumber = exponentiation(props.initialAmount) - 1;

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <>
      <div className={classes.Statistics}>
        <p className={classes.Paragraph}>
          Liczba Twoich ruchów: <strong>{props.count}</strong>
        </p>
        <p className={classes.Paragraph}>
          Minimalna liczba ruchów, potrzebna do rozwiązania tej układanki:{' '}
          <strong>{minNumber}</strong>
        </p>
      </div>
      {minNumber === props.count && (
        <Backdrop >
          <div className={classes.Congrats}>
            <h1>Gratulacje!</h1>
            <p>
              Rozwiązałeś układankę z wykorzystaniem możliwie najmniejszej ilości
              ruchów!
            </p>
            <Button click={reloadPage}>Zagraj jeszcze raz</Button>
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default Statistics;
