import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import LoginAndRegister from "./pages/LoginAndRegister.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/loginAndRegister" element={<LoginAndRegister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
