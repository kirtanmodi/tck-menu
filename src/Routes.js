import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Core/Main";
import "./App.css";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="https://kirtanmodi.github.io/tck-menu"
          element={<Main />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
