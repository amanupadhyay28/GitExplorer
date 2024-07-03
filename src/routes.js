import { lazy } from "react";
import Home from "./components/Home";
const Users = lazy(() => import("./components/Users"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const SearchUser = lazy(() => import("./components/SearchUser"));
const Login = lazy(() => import("./components/Login"));
const AuthProfile = lazy(() => import("./components/AuthProfile"));
const Aboutus = lazy(() => import("./components/About"));
const NotFound = lazy(() => import("./components/Notfound"));
const RepoDetails =lazy(()=>import('./components/RepoDetails'))

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requiresAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requiresAuth: true,
  },
  {
    path: "/search",
    component: SearchUser,
    requiresAuth: false,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requiresAuth: false,
  },
  {
    path: "/aboutUs",
    component: Aboutus,
    requiresAuth: false,
  },
  {
    path:'/repo-details/:name/:username',
    component:RepoDetails,
    requiresAuth:false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];
