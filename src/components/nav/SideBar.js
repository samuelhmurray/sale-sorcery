import React from "react";
import { Link } from "react-router-dom";
import "../../output.css";

export const SideBar = () => {
  return (
    <div className="flex  ">
      <div className="fixed justify-between top-0 left-0 h-screen w-28 flex flex-col bg-sidebar shadow-lg text-slate-50 items-center">
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
        <div className="w-28 flex flex-col text-slate-50 items-center mb-24">
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
    </div>
  );
};

export default SideBar;
