import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import RandomMovementContainer from './components/RandomMovementContainer';
import Toolbox from './components/Toolbox.js';

const hueOptions = [
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'orange', label: 'Orange' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
];

const luminosityOptions = [
  { value: 'bright', label: 'Bright' },
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
];

export default function App() {
  const [hue, setHue] = useState(null);
  const [luminosity, setLuminosity] = useState(null);

  const [color, setColor] = useState('transparent');
  const handleColorGen = () => {
    console.log(hue, luminosity);
    setColor(
      randomColor({
        luminosity: luminosity != null ? luminosity.value : 'random',
        hue: hue != null ? hue.value : 'random',
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
          luminosity={luminosity}
          setLuminosity={setLuminosity}
          luminosityOptions={luminosityOptions}
        />
      </header>
      <main className="App-main">
        <RandomMovementContainer
          backgroundColor={color}
          onObjectClick={handleColorGen}
        />
      </main>
      <footer className="App-footer">
        <p>
          Background image by{' '}
          <a href="https://unsplash.com/photos/two-minions-character-figure-on-red-table-tloFnD-7EpI">
            Justin Lim
          </a>{' '}
          on <a href="https://unsplash.com/license">Unsplash</a>
        </p>
      </footer>
    </div>
  );
}
