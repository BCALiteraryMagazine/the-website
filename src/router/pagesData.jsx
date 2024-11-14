import React from 'react';
import About from "../pages/About";
import Home from "../pages/Home";

const pagesData = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
    showOnHeader: true
  },
  {
    path: "/about",
    element: <About />,
    title: "About Us",
    headerTitle: "About",
    showOnHeader: true
  },
  {
    path: "*",
    element: <Home />,
    title: "home"
  }
];

export default pagesData;
