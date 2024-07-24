import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Trainbook from "./components/trainBook/Trainbook";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/trainBook",
      element: <Trainbook />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return (
    <div className="appDiv">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
