import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../services/projectServices.js";
import { formatToUSD } from "../../functions/formatUSD.js";

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
    allProjects.forEach((project) => {
      if (project.userProjects.find((ep) => ep.userId === currentUser.id)) {
        setCurrentProjects(project);
        setTitle(`Welcome,`);
        total += project.budget;
      }
    });
    setTotalBudget(total);
  }, [allProjects, currentUser]);

  console.log(`${currentProjects.user}`);
  return (
    <div className="m-96">
      <div>Total Budget: {formatToUSD(totalBudget)}</div>
    </div>
  );
};
