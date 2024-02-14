import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../services/projectServices.js";
import { formatToUSD } from "../../functions/formatUSD.js";
import { Link } from "react-router-dom";

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

  return (
    <div className="ml-44 mt-36 mr-10 flex-nowrap">
      <div className="text-center border-8 border-topbar rounded-3xl p-4 m-1">
        <div className="text-4xl">
          Total Managed Spend: {formatToUSD(totalBudget)}
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        {currentProjects.map((project, index) => (
          <Link to={`/projects/${project.id}`}>
            <div
              key={index}
              className="text-center  border-8 border-topbar hover:shadow-2xl rounded-3xl p-4 m-1 w-60"
            >
              <div>
                <strong>Project Name:</strong> {project.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <div>
          <button>Meta btn</button>
        </div>
        <div>
          <button>Google btn</button>
        </div>
      </div>
    </div>
  );
};
