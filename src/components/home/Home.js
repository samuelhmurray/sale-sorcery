import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../services/projectServices.js";
import { formatToUSD } from "../../functions/formatUSD.js";
import { Link } from "react-router-dom";
import MetaImage from "../../assets/Meta.png";
import GoogleImage from "../../assets/google-ads.png";

export const Home = ({ setTitle, currentUser }) => {
  const [allProjects, setAllProjects] = useState([]);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    getAllProjects().then((projects) => {
      setAllProjects(projects);
    });
  }, []);

  useEffect(() => {
    let total = 0;
    const userProjects = allProjects.filter((project) =>
      project.userProjects.find((ep) => ep.userId === currentUser.id)
    );
    setCurrentProjects(userProjects);
    setTitle(`Welcome, ${currentUser.firstName}!`);
    userProjects.forEach((project) => {
      total += project.budget;
    });
    setTotalBudget(total);
  }, [allProjects, currentUser]);

  const redirectToGoogle = () => {
    window.open("https://ads.google.com/home/", "_blank");
  };
  const redirectToMeta = () => {
    window.open("https://www.facebook.com/business/ads", "_blank");
  };

  return (
    <div className="ml-32 mt-4 mr-6 flex-nowrap">
      <div className="text-center  border-8 border-topbar rounded-3xl p-4 ">
        <div className="text-4xl">
          Total Managed Spend: <strong>{formatToUSD(totalBudget)}</strong>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        {currentProjects.map((project, index) => (
          <Link key={index} to={`/projects/${project.id}`}>
            <div className="text-center border-8 border-topbar hover:shadow-2xl rounded-3xl p-4 m-1 w-72 h-30">
              <div>
                <strong> {project.name}</strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-around p-5">
        <button
          onClick={redirectToMeta}
          className="w-40 h-40  border-8 border-topbar hover:shadow-2xl rounded-3xl p-4"
        >
          <img src={MetaImage} />
        </button>
        <button
          onClick={redirectToGoogle}
          className="w-40 h-40 border-8 border-topbar hover:shadow-2xl rounded-3xl p-4"
        >
          <img src={GoogleImage} />
        </button>
      </div>
    </div>
  );
};
