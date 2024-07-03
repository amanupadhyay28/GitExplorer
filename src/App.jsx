import React, { useState, lazy, Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { appRoutes } from "./routes";
import "./components/styles.css";

import { SwitchTransition, CSSTransition } from "react-transition-group";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const location = useLocation();

  return (
    <SwitchTransition component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Suspense fallback={() => <h1>Loading..</h1>}>
          <Routes location={location}>
            {appRoutes.map((route) => {
              if (route.requiresAuth && !isLogged) {
                return (
                  <Route
                    key={Routes.path}
                    exact
                    path={route.path}
                    element={<Navigate replace to={"/login"} />}
                  />
                );
              } else {
                return (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    element={
                      <route.component
                        setIsLogged={setIsLogged}
                        setUsername={setUsername}
                        username={username}
                      />
                    }
                  />
                );
              }
            })}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default App;
// <Route exact path="/" element={<Home />} />
// <Route path="/about" element={<Aboutus />} />
// <Route path="/users" element={<Users />} />

// <Route element={<UserProfile />} path="/users/user/:username" />
// <Route element={<SearchUser />} path="/search" />
// <Route
//   element={
//     <Login setIsLogged={setIsLogged} setUsername={setUsername} />
//   }
//   path="/login"
// />
// <Route
//   element={
//     isLogged ? (
//       <AuthProfile username={username} />
//     ) : (
//       <Navigate replace to={"/login"} />
//     )
//   }
//   path="/authProfile"
// />

// <Route path="*" element={<NotFound />}></Route>
