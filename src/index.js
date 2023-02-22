import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Login} from "./components/Login";
import {MainNav} from "./components/MainNav";
import {Mentors} from "./components/Mentors";
import {Register} from "./components/Register";
import {Resume} from "./components/Resume";
import {Teachers} from "./components/Teachers";
import "./App.css";
import { About } from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNav />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/mentors",
    element: <Mentors />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path:"/about",
    element: <About/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer rtl={true} theme="colored" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
