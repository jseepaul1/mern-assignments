import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NumberOrWord from "./components/NumberOrWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Home" element = {<Home />} />
          <Route path="/:param" element = {<NumberOrWord />} />
          <Route path="/:param/:color/:backGroundColor" element = {<NumberOrWord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
