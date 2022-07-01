import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateGame from "./components/CreateGame";
import DisplayAll from "./components/DisplayAll";
import Header from "./components/Header";
import DisplayOne from "./components/DisplayOne";
import UpdateGame from "./components/UpdateGame";

function App() {
  return (
    <BrowserRouter>
    <Header  />
      <div className="App">
      <img className ="image" src="https://assets-prd.ignimgs.com/2021/12/30/top100games-100-81-banner-1640835563416.jpg?fit=bounds&width=1280&height=720" alt="" />
        {/* Header is navigation which will be shown on every page */}
        <Routes>
          {/* its element not elements */}
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<CreateGame />} />
          <Route path="/game/:id" element={<DisplayOne />} />  
          <Route path="/game/edit/:id" element={<UpdateGame />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
