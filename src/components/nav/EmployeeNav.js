import React from "react";
import "../../output.css";

import { Link } from "react-router-dom";

export const EmployeeNav = () => {
  return (
    <ul class="flex">
      <li class="">
        <Link class="" to="/projects">
          Projects
        </Link>
      </li>
      <li class="">
        <Link class="" to="/clients">
          Clients
        </Link>
      </li>
      <li class="">
        <Link to="/newProject">
          <button class="">+</button>
        </Link>
      </li>
      <li class="">
        <Link
          class=""
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
