import React from "react";
import "../../output.css";
import { Link } from "react-router-dom";

export const EmployeeNav = ({ title }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-topbar p-5 flex items-center justify-between z-10">
      <div className="text-8xl">{title}</div>
      <div className="flex">
        <ul className="flex m-0 flex-nowrap text-slate-900">
          <li className="mr-8">
            <Link to="/newProject">
              <button className="flex items-center justify-center hover:rounded-2xl text-8xl py-1 px-4  rounded-full bg-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-20 h-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
