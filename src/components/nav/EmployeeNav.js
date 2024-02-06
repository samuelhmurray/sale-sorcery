import React from "react";
import "../../output.css";

import { Link } from "react-router-dom";

export const EmployeeNav = () => {
  return (
    <ul className="flex m-0 flex-nowrap bg-topbar p-5 text-slate-900">
      {/* need to do an if statment here?  */}
      <div class="ml-28 text-8xl">NAME OF PAGE</div>

      <div className="flex ml-auto">
        <li className="mr-8">
          <Link to="/newProject">
            <button class="flex items-center justify-center hover:shadow-2xl text-8xl py-1 px-4 rounded bg-slate-600">
              +
            </button>
          </Link>
        </li>
      </div>
    </ul>
  );
};
