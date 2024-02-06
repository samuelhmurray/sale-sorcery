import React from "react";
import "../../output.css";

import { Link } from "react-router-dom";

export const EmployeeNav = () => {
  return (
    <ul className="flex m-0 flex-nowrap bg-topbar p-5 text-slate-900">
      <div class="ml-28">hello</div>
      <div className="flex ml-auto">
        <li className="text-xl mr-4">
          <Link to="/newProject">
            <button className="">+</button>
          </Link>
        </li>
        <li className="text-xl">
          <Link to="/logIn">Logout</Link>
        </li>
      </div>
    </ul>
  );
};
