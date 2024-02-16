import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../../services/projectServices.js";
import { formatToUSD } from "../../functions/formatUSD.js";
import { ProjectDetailsBarChart } from "../charts/ProjectDetailsBarChart.js";

export const ProjectDetails = ({ setTitle }) => {
  const [project, setProject] = useState([]);

  const { projectId } = useParams();

  useEffect(() => {
    getProjectById(projectId).then((projectObj) => {
      setProject(projectObj);
      setTitle(projectObj.name);
    });
  }, [projectId, setTitle]);

  return (
    <div className="ml-32 mt-4 mr-4 flex-nowrap">
      <div className="text-center border-8 border-topbar rounded-3xl  p-4 m-1">
        <div className="flex justify-around">
          <div>
            <div>
              <strong>Market:</strong> {project.market}
            </div>
            <div>
              <strong>Budget:</strong> {formatToUSD(project.budget)}
            </div>
            <div>
              <strong>Product:</strong> {project.product}
            </div>
          </div>
          <div>
            <div>
              <strong>Start Date:</strong> {project.startDate}
            </div>
            <div>
              <strong>End Date:</strong> {project.endDate}
            </div>

            <div>
              <strong>Client:</strong>{" "}
              {project.user ? (
                <Link
                  className="text-sky-950 hover:text-sky-600"
                  to={`/clients/${project.user.id}`}
                >
                  {project.user.firstName} {project.user.lastName}
                </Link>
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>
      </div>
      <ProjectDetailsBarChart />
    </div>
  );
};
