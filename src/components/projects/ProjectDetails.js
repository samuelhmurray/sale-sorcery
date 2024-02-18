import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../../services/projectServices.js";
import { formatToUSD } from "../../functions/formatUSD.js";
import { ProjectDetailsBarChart } from "../charts/ProjectDetailsBarChart.js";
import { getPopulationDataSex } from "../../services/censusServices.js";
import { formatMarketToFIPS } from "../../functions/marketFormatting.js";
import { PopSexByState } from "../charts/PopSexByState.js";

export const ProjectDetails = ({ setTitle }) => {
  const [project, setProject] = useState([]);
  const [populationDataSex, setPopulationDataSex] = useState([]);
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [malePopulation, setMalePopulation] = useState(0);
  const [femalePopulation, setFemalePopulation] = useState(0);
  const [formattedMarket, setFormattedMarket] = useState([]);

  const { projectId } = useParams();

  useEffect(() => {
    getProjectById(projectId).then((projectObj) => {
      setProject(projectObj);
      setTitle(projectObj.name);
      setFormattedMarket(formatMarketToFIPS(projectObj.market));
    });
  }, [projectId]);

  useEffect(() => {
    if (formattedMarket.length > 0) {
      getPopulationDataSex(formattedMarket).then((popdata) => {
        setPopulationDataSex(popdata);
      });
    }
  }, [formattedMarket]);

  useEffect(() => {
    if (populationDataSex.length > 1) {
      const dataRow = populationDataSex[1];
      setTotalPopulation(parseInt(dataRow[1], 10));
      setMalePopulation(parseInt(dataRow[2], 10));
      setFemalePopulation(parseInt(dataRow[3], 10));
    }
  }, [populationDataSex]);

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
      <PopSexByState
        malePopulation={malePopulation}
        femalePopulation={femalePopulation}
      />
    </div>
  );
};
