import React from "react";
import "../../output.css";
import { Link } from "react-router-dom";

export const EmployeeNav = ({ title }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-topbar p-5 flex justify-between items-center z-10">
      <div className="mr-8">
        <Link to="/">
          <button className="flex items-center hover:rounded-2xl text-8xl py-1 px-4 rounded-full bg-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-20 h-20 p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        </Link>{" "}
      </div>
      <div className="flex-grow text-8xl">{title}</div>
      <div className="flex m-0 flex-nowrap text-slate-900">
        <div className="mr-8">
          <Link to="/newProject">
            <button className="flex items-center hover:rounded-2xl text-8xl py-1 px-4  rounded-full bg-slate-600">
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
        </div>
      </div>
    </nav>
  );
};
