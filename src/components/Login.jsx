import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const login = ({ setIsLogged, setUsername }) => {
  const [loginUserName, setloginUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dummyUserObject = {
    username: "amanupadhyay28",
    password: "12345",
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginUserName === dummyUserObject.username &&
      password === dummyUserObject.password
    ) {
      setUsername(loginUserName);
      setIsLogged(true);
      navigate("/authProfile");
    } else {
      setErrorMsg("Invalid credentials !!!");
    }
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <span className="error-span" style={{ color: "red" }}>
        {errMsg}
      </span>
      <label htmlFor="username" className="login-label">
        UserName
      </label>
      <input
        type="text"
        name="username"
        value={loginUserName}
        onChange={(e) => {
          setloginUserName(e.target.value);
          setErrorMsg("");
        }}
        className="login-inp"
        placeholder="username"
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="login-inp"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorMsg("");
        }}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default login;
