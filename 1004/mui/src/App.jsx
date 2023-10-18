import "./App.css";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Blog from "./component/Blog";
import Login from "./component/Login";
import Register from "./component/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
