import './App.css';
import React, {useState} from 'react';
import AxiosPokemonApi from './components/AxiosPokemonApi';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <h1>Here is a List of all {count} Pokemon using Axios!</h1>
      <AxiosPokemonApi setCount = {setCount}/>
    </div>
  );
}

export default App;
