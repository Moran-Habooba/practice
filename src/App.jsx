import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import { NavLink, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/Sign-in">Sign-in</NavLink>
        <br />
        <NavLink to="/Sign-up">Sign-up</NavLink>
        <br />
        <hr />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
