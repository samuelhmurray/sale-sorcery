import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-28 flex flex-col bg-sidebar shadow-lg text-slate-50 items-center">
        <div>
          <button className="m-10">
            <Link
              className="text-4xl w-20 h-20 border-8 border-topbar rounded-full flex items-center justify-center"
              to="/projects"
            >
              P
            </Link>
          </button>
          <button className="m-10">
            <Link
              className="text-4xl w-20 h-20 border-8 border-topbar rounded-full flex items-center justify-center"
              to="/clients"
            >
              C
            </Link>
          </button>
        </div>
        <button className="mt-auto">
          <Link
            className="text-4xl w-20 h-20 border-8 border-topbar rounded-full flex items-center justify-center"
            to="/logIn"
          >
            L
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
