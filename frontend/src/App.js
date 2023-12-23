import { useEffect } from "react";
import About from "./Components/About/About";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navabar from "./Components/Navabar/Navabar";
import Todo from "./Components/Todo/Todo";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "./store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(sessionStorage.getItem("id"));
    const id = sessionStorage.getItem("id")
    if (id) {
      dispatch(authAction.login());
    }
  }, []);
  return (
    <div className="App">
      <Navabar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About-us" element={<About />} />
        <Route exact path="/SignUp" element={<Signup />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/todo" element={<Todo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
