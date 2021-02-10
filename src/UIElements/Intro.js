import React, {useState} from 'react';

import Button from './Button'

import classes from './Intro.Module.css';

const Intro = (props) => {

  const [selectedAmount,  setSelectedamount]  = useState(3);


  const changeAmount = (e) => {
    setSelectedamount(+e.target.value)
  }

  return (
    <div className={classes.Intro}>
      <h1>Wieże Hanoi</h1>
      <p>
        {`Celem gry jest przestawienie wieży z pierwszego stosu na trzeci - z
        zachowaniem 
        takiej samej kolejności krążków. Należy przekładać po jednym
        krążku,
        wybierając najpierw najmniejszy krążek z danego stosu, a
        następnie wskazując pin stosu,
        na który ma zostać przeniesiony. Nie wolno układać większego krążka na mniejszym.
        Dozwolone jest przesunięcie dowolnego krążka na dowolony stos - nawet na taki,
        na którym nie ma jeszcze żadnego krążka.`}
      </p>
      <div className={classes.Navigation}>
        <label for='amount'>Wybierz jaką ilością krążków chcesz zagrać:</label>
        <select name='amount' id='amount'  value={selectedAmount} onChange={(e) => changeAmount(e)}>
          <option value='3'> 3</option>
          <option value='4'> 4</option>
          <option value='5'> 5</option>
          <option value='6'> 6</option>
          <option value='7'> 7</option>
        </select>
        <Button click={() => props.startGame(selectedAmount)}>Zacznij grę!</Button>
      </div>
    </div>
  );
};

export default Intro;
