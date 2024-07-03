import axios from "axios";
import React, { useState, useEffect } from "react";
// import "./styles.css";

import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const getUsers = async () => {
    const res = await axios.get("https://api.github.com/users?since=XXXX");
    console.log("useres ", res.data);
    setUsers(res.data);

    return res.data;
  };
  useEffect(() => {
    getUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ maginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        {users.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
          <button onClick={()=>navigate(`/users/user/${user.login}`)} className="view-btn">View User</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
