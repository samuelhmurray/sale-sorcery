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
    <div className="ml-44 mt-36 mr-10 flex-nowrap">
      <div className="text-center border-8 border-topbar rounded-3xl p-4 m-1">
        <div className="text-4xl">
          Total Managed Spend: {formatToUSD(totalBudget)}
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        {currentProjects.map((project, index) => (
          <Link key={index} to={`/projects/${project.id}`}>
            <div className="text-center border-8 border-topbar hover:shadow-2xl rounded-3xl p-4 m-1 w-60">
              <div>
                <strong>Project Name:</strong> {project.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-around mt-8">
        <button
          onClick={redirectToMeta}
          className="w-96 h-96 border-8 border-topbar hover:shadow-2xl rounded-3xl p-4"
        >
          <img src={MetaImage} alt="Meta Image" />
        </button>
        <button
          onClick={redirectToGoogle}
          className="w-96 h-96 border-8 border-topbar hover:shadow-2xl rounded-3xl p-4"
        >
          <img src={GoogleImage} alt="Google Image" />
        </button>
      </div>
    </div>
  );
};
