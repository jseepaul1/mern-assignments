import './App.css';
import MoreForm from './components/MoreForm';
import Button from 'react-bootstrap/Button';

// to import bootstrap: install it in terminal, copy style sheet link and paste it in index.html
// then import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <MoreForm />
      <Button variant="primary">Button #1</Button>
    </div>
  );
}

export default App;
