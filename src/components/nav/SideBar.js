import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <ul className="flex m-1 flex-nowrap bg-topbar text-slate-900">
      <div
        className="fixed top-0 left-0 h-screen w-28 flex flex-col
                    bg-sidebar shadow-lg text-slate-50 items-center "
      >
        <li className="m-10 ">
          <Link
            className=" text-4xl w-20 h-20 border-8 border-topbar rounded-full flex items-center justify-center "
            to="/projects"
          >
            P
          </Link>
        </li>
        <li className="">
          <Link
            className="text-4xl w-20 h-20 border-8 border-topbar rounded-full flex items-center justify-center"
            to="/clients"
          >
            C
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default SideBar;
