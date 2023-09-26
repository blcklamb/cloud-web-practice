import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  const isLogin = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
