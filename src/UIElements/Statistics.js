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
  };

  let paragraph = '';
  if (props.isGameOver && minNumber === props.count) {
    paragraph = `Rozwiązałeś układankę z wykorzystaniem możliwie najmniejszej ilości
    ruchów!`;
  } else if (props.isGameOver && minNumber < props.count) {
    paragraph = `Rozwiązałeś układankę!`;
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
        <div className={classes.Btn}>
        <Button click={reloadPage}>Zacznij grę od nowa</Button>
        </div>
      </div>
      {props.isGameOver && (
        <Backdrop>
          <div className={classes.Congrats}>
            <h1>Gratulacje!</h1>
            <p> {paragraph}</p>
            <div className={classes.RestartGameBtn}>
              <Button click={reloadPage}>Zagraj jeszcze raz</Button>
            </div>
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default Statistics;
