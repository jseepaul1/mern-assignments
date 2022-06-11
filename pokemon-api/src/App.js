import './App.css';
import React, {useState} from 'react'
import PokemonApi from './components/PokemonApi';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* used count to get the total numbers of Pokemon */}
      <h1>Here is a List of all {count} Pokemon!</h1>
      <PokemonApi  setCount = {setCount}/>
    </div>
  );
}

export default App;
