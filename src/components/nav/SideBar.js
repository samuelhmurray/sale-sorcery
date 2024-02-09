import React from "react";
import { Link } from "react-router-dom";
import "../../output.css";

export const SideBar = () => {
  return (
    <div className="flex ">
      <div className="fixed justify-between top-30 left-0 h-screen w-40 flex flex-col bg-sidebar shadow-lg text-slate-50 items-center">
        <div>
          <button className="m-10">
            <Link
              className="text-4xl w-24 h-20 border-8 border-topbar hover:rounded-2xl rounded-full flex items-center justify-center"
              to="/projects"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
            </Link>
          </button>
          <button className="m-10">
            <Link
              className="text-4xl w-24 h-20 border-8 border-topbar hover:rounded-2xl rounded-full flex items-center justify-center"
              to="/clients"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
            </Link>
          </button>
        </div>
        <div className="w-28 flex flex-col text-slate-50 items-center mb-24">
          <button className="mt-auto">
            <Link
              className="mb-28 text-4xl w-24 h-20 border-8 border-topbar hover:rounded-2xl rounded-full flex items-center justify-center"
              to="/logIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
