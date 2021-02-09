import { useState } from 'react';
import './App.css';
import './App.css';

import Pin from './elements/Pin';
import Ring from './elements/Ring';
import Tower from './elements/Tower';
import Backdrop from './UIElements/Backdrop';
import Intro from './UIElements/Intro';
import Statistics from './UIElements/Statistics';
import Warning from './UIElements/Warning';

function App() {
  const [towers, setTowers] = useState({
    1: [],
    2: [],
    3: [],
  });
  const [ringAndTower, setRingAndTower] = useState([0, 0]);
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(0);
  const [initialAmountOfRings, setInitialAmountOfRings] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const startGame = (number) => {
    const initialState = [];
    for (let i = 0; i < number; i++) {
      initialState.push(i + 1);
    }
    setTowers((prevState) => ({
      ...prevState,
      [1]: initialState,
    }));
    setInitialAmountOfRings(number);
    setIsModalVisible(false);
  };

  const updateMessage = (mssg) => {
    setMessage(mssg);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const updateSelectedRing = (size, towerNumber) => {
    if (size !== Math.min(...towers[`${towerNumber}`])) {
      updateMessage('Wybierz najmniejszy krążek ze stosu!');
    } else {
      setRingAndTower([size, towerNumber]);
    }
  };

  const selectPin = (number) => {
    if (ringAndTower[0] > 0) {
      const filledTower = [...towers[number]];

      if (ringAndTower[0] < Math.min(...filledTower)) {
        let reducedTower = [...towers[ringAndTower[1]]];
        reducedTower = reducedTower.filter((item) => item !== ringAndTower[0]);

        filledTower.push(ringAndTower[0]);
        filledTower.sort(function (a, b) {
          return a - b;
        });

        setTowers((prevState) => ({
          ...prevState,
          [ringAndTower[1]]: reducedTower,
          [`${number}`]: filledTower,
        }));
        setRingAndTower([0, 0]);
        setCounter((prevState) => prevState + 1);
      } else {
        updateMessage('Nie możesz kłaść większego krążka na mniejszy');
      }
    } else {
      updateMessage('Najpierw wybierz krążek, który chcesz przesunąć');
    }
  };

  let TowerComponents = [];
  for (let i = 1; i < 4; i++) {
    TowerComponents.push(
      <Tower
        key={i}
        name={i}
        rings={towers[`${i}`]}
        selectRing={updateSelectedRing}
        selectPin={selectPin}
      />
    );
  }


  if (towers['1'].length === 0 && towers['2'].length === 0 & towers['3'].length === initialAmountOfRings) {
    setTimeout(() => {
      setIsGameOver(true);
    }, 1000);
  }

  return (
    <>
      {isModalVisible && (
        <Backdrop >
          <Intro startGame={startGame} />
        </Backdrop>
      )}
      <div className='wrapper'>
        {TowerComponents}
        <Statistics initialAmount={initialAmountOfRings} count={counter} isGameOver={isGameOver} />
      </div>
      {message !== '' && <Warning>{message}</Warning>}
    </>
  );
}

export default App;
