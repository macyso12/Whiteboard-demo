import './App.css';
import React, {useState} from 'react';
import Whiteboard from './whiteboard/whiteboard';

function App() {
  const [active, setActive] = useState('Show');
  return (
    <div>
      <button onClick={() => setActive('Show')}>Show Whiteboard</button>
      <div>{active === 'Show' && <Whiteboard />}</div>
    </div>
  );
}

export default App;
