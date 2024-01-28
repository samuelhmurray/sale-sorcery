import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const EmployeeNav = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item text-primary">
        <Link className="navbar-link" to="/projects">
          Projects
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/clients">
          Clients
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/newProject">
          <button className="navbar-link-btn">+</button>
        </Link>
      </li>
      <li className="navbar-item navbar-logout">
        <Link
          className="navbar-link"
          to="/logIn"
          // onClick={() => {
          //   localStorage.removeItem("sales_user");
          // }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};
