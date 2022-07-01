import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePlayer from "./components/CreatePlayer";
import DisplayAll from "./components/DisplayAll";
import Header from "./components/Header";
import UpdatePlayer from "./components/UpdatePlayer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/players/addPlayer" element={<CreatePlayer />} />
          <Route path="/player/edit/:id" element={<UpdatePlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
