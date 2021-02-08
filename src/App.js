import './App.css';
import './App.css';

import Pin from './elements/Pin';
import Ring from './elements/Ring';
import Tower from './elements/Tower';

function App() {
  return (
    <div className='wrapper'>
      <Tower name={1} amountOfRings={10}/>
      <Tower name={2} amountOfRings={0}/>
      <Tower name={3} amountOfRings={0}/>
    </div>
  );
}

export default App;
