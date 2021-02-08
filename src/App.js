import { useState } from 'react';
import './App.css';
import './App.css';

import Pin from './elements/Pin';
import Ring from './elements/Ring';
import Tower from './elements/Tower';

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

  const updateSelectedRing = (size, towerNumber) => {
    if (size !== Math.min(...towers[`${towerNumber}`])) {
      alert('Wybierz najmniejszy krążek ze stosu!');
    } else {
      setRingAndTower([size, towerNumber]);
    }
  };

  const selectPin = (number) => {
    if (ringAndTower[0] > 0) {

      const filledTower = [...towers[number]];

      if(ringAndTower[0] < Math.min(...filledTower)) {
        let reducedTower = [...towers[ringAndTower[1]]];
        reducedTower = reducedTower.filter((item) => item !== ringAndTower[0]);
  
        filledTower.push(ringAndTower[0]);
        filledTower.sort(function(a, b){return a-b})

        setTowers((prevState) => ({
          ...prevState,
          [ringAndTower[1]]: reducedTower,
          [`${number}`]: filledTower,
        }));

        console.log(reducedTower, filledTower);

      } else {
        alert('Nie możesz kłaść większego krążka na mniejszy')
      }

    }
  };

  return (
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
    </div>
  );
}

export default App;
