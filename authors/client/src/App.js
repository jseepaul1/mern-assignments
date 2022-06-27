import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewAuthor from "./components/NewAuthor";
import Header from "./components/Header";
import AuthorList from "./components/AuthorList";
import UpdateAuthor from "./components/UpdateAuthor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<AuthorList />} />
      <Route path="/new" element={<NewAuthor />} />
      <Route path="/author/edit/:id" element={<UpdateAuthor />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
