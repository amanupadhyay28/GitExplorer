import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";

const RepoList = () => {
  const [repoData, setrepoData] = useState(null);
  const getRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=XXX"
    );
    console.log("repo list data ", response.data.items);
    if (!response) throw new Error(console.log("Failed to fetch details"));
    setrepoData(response.data.items);
    return response.data;
  };
  useEffect(() => {
    getRepos().catch((e) => console.error(e));
  }, []);

  return (
    <>
      <h1>Repos list showing </h1>
      <Link to="/users">Go to Users Page</Link>
      <div className="users-cont">
        {repoData ? (
          repoData.map((repo) => (
            <div className="user-card-cont" key={repo.id}>
              <img
                src={repo.owner.avatar_url}
                alt="userAvatar"
                className="user-avatar"
              />
              <span className="repo-lang-span">Language:{repo.language}</span>
              <div>
                {" "}
                By:{" "}
                <Link
                  to={`/users/user/${repo.owner.login}`}
                  className="repo-owner"
                >
                  {repo.owner.login}
                </Link>
              </div>
              
           <Link to={`/repo-details/${repo.name}/${repo.owner.login}`}>
           <button>View Repo</button>
           </Link>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};
export default RepoList;
