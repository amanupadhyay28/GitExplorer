import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import AuthProfile from "./components/AuthProfile";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/Profile" element={<Aboutus />} />
        <Route path="/users" element={<Users />} />

        <Route element={<UserProfile />} path="/users/user/:username" />
        <Route element={<SearchUser />} path="/search" />
        <Route
          element={
            <Login setIsLogged={setIsLogged} setUsername={setUsername} />
          }
          path="/login"
        />
        <Route
          element={
            isLogged ? (
              <AuthProfile username={username} />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }
          path="/authProfile"
        />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
