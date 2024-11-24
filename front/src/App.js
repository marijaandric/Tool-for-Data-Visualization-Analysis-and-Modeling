import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Layout from "./pages/Layout/Layout.tsx";
import LoginAndRegister from "./pages/LoginAndRegister/LoginAndRegister.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/loginAndRegister" element={<LoginAndRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
