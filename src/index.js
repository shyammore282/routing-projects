import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import Session from "./pages/Session";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DataBlog from "./DataBlog/Datablog";
import Error404 from "./DataBlog/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));
let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/session",
    element: <Session />,
  },
  {
    path: "/",
    element: <DataBlog />,
  },
  {
    // it is error throw in browser
    path: "*",
    element: <Error404 />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
