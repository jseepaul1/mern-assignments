import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewProduct from "./components/NewProduct";
import ShowOneProduct from "./components/ShowOneProduct";
import Header from "./components/Header";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NewProduct />} />
          <Route path="/product/:id" element={<ShowOneProduct />} />
          <Route path="/product/edit/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
