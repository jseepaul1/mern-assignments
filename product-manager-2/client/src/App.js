import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewProduct from "./components/NewProduct";
import ShowOneProduct from "./components/ShowOneProduct";
import Header from "./components/Header";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<NewProduct />} />
          <Route path="/product/:id" element={<ShowOneProduct />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
