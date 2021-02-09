import { useState } from 'react';
import './App.css';
import './App.css';

import Pin from './elements/Pin';
import Ring from './elements/Ring';
import Tower from './elements/Tower';
import Statistics from './UIElements/Statistics';
import Warning from './UIElements/Warning';

function App(props) {
  const initialState = [];
  for (let i = 0; i < props.initialAmount; i++) {
    initialState.push(i + 1);
  }

  const [towers, setTowers] = useState({
    1: initialState,
    2: [],
    3: [],
  });
  const [ringAndTower, setRingAndTower] = useState([0, 0]);
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(0);

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
        setCounter(prevState => prevState + 1
        )
  
        console.log(counter);
      } else {
        updateMessage('Nie możesz kłaść większego krążka na mniejszy');
      }
    } else {
      updateMessage('Najpierw wybierz krążek, który chcesz przesunąć');
    }
  };

  return (
    <>
      <div className='wrapper'>
        <Tower
          name={1}
          rings={towers['1']}
          selectRing={updateSelectedRing}
          selectPin={selectPin}
        />
        <Tower
          name={2}
          rings={towers['2']}
          selectRing={updateSelectedRing}
          selectPin={selectPin}
        />
        <Tower
          name={3}
          rings={towers['3']}
          selectRing={updateSelectedRing}
          selectPin={selectPin}
        />
        <Statistics initialAmount={props.initialAmount} count={counter}/>
      </div>
      {message !== '' && <Warning>{message}</Warning>}
    </>
  );
}

export default App;
