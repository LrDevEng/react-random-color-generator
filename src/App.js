import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import RandomMovementContainer from './components/RandomMovementContainer';
import Toolbox from './components/Toolbox.js';

const hueOptions = [
  { value: 'random', label: 'Random' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'orange', label: 'Orange' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
];

const luminosityOptions = [
  { value: 'random', label: 'Random' },
  { value: 'bright', label: 'Bright' },
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
];

export default function App() {
  const [hue, setHue] = useState(hueOptions[0]);
  const [luminosity, setLuminosity] = useState(luminosityOptions[0]);

  const [color, setColor] = useState('transparent');
  const handleColorGen = () => {
    console.log(hue, luminosity);
    setColor(
      randomColor({
        luminosity: luminosity.value,
        hue: hue.value,
      }),
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Toolbox
          handleColorGen={handleColorGen}
          hue={hue}
          setHue={setHue}
          hueOptions={hueOptions}
          huePlaceholder={hueOptions[0]}
          luminosity={luminosity}
          setLuminosity={setLuminosity}
          luminosityOptions={luminosityOptions}
          luminosityPlaceholder={luminosityOptions[0]}
        />
      </header>
      <main className="App-main">
        <RandomMovementContainer
          backgroundColor={color}
          onObjectClick={handleColorGen}
        />
      </main>
      <footer className="App-footer">
        <div style={{ marginTop: '5px' }}>
          Background image by{' '}
          <a href="https://unsplash.com/photos/two-minions-character-figure-on-red-table-tloFnD-7EpI">
            Justin Lim
          </a>{' '}
          on <a href="https://unsplash.com/license">Unsplash</a>
        </div>
      </footer>
    </div>
  );
}
