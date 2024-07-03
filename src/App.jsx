import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Aboutus from "./components/About";
import Users from "./components/Users";
import "./components/styles.css";
import Navbar from "./components/Navbar";
import NotFound from "./components/Notfound";
import UserProfile from "./components/UserProfile";
import SearchUser from "./components/SearchUser";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/Profile" element={<Aboutus />} />
        <Route path="/users" element={<Users />} />

        <Route element={<UserProfile />} path="/users/user/:username" />
        <Route element={<SearchUser />} path="/search" />
        <Route element={<Login />} path="/login" />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
