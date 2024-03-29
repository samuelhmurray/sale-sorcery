import React from "react";
import { EmployeeViews } from "./views/EmployeeViews.js";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login.js";
import "./output.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<EmployeeViews />} />
    </Routes>
  );
};

export default App;
