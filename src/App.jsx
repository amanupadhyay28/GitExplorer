import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Aboutus from "./components/About";
import Users from "./components/Users";
import "./components/styles.css";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Profile" element={<Aboutus />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
