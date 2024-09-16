import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import RandomMovementContainer from './components/RandomMovementContainer';
import Toolbox from './components/Toolbox.js';

export default function App() {
  const [color, setColor] = useState('#111111');

  const handleColorGen = () => {
    setColor(randomColor());
  };

  return (
    <div className="App">
      <header className="App-header">
        <Toolbox handleColorGen={handleColorGen} />
      </header>
      <main className="App-main">
        <RandomMovementContainer color={color} onObjectClick={handleColorGen} />
      </main>
      <footer className="App-footer">Footer</footer>
    </div>
  );
}
