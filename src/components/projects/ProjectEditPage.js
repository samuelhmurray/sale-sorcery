import React, { useEffect, useState } from "react";
import {
  getProjectById,
  saveEditedProject,
} from "../../services/projectServices.js";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUsers } from "../../services/userServices.js";
import "../../output.css";
import { formatToUSD } from "../../functions/formatUSD.js";
import { usStates } from "../../functions/UsStates.js";

export const ProjectEditPage = ({ setTitle }) => {
  const [clients, setClients] = useState([]);
  const [project, setProject] = useState({});
  const [selectedClient, setSelectedClient] = useState(0);
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((res) => {
      if (Array.isArray(res)) {
        const nonEmployees = res.filter((user) => !user.isEmployee);
        setClients(nonEmployees);
      }
    });
  }, []);

  useEffect(() => {
    getProjectById(projectId).then((projectData) => {
      if (projectData) {
        setProject(projectData);
        setSelectedClient(+projectData.user.id);
        setSelectedStartDate(projectData.startDate);
        setSelectedEndDate(projectData.endDate);
        setSelectedMarket(projectData.market);
        setSelectedProjectName(projectData.name);
        setSelectedBudget(projectData.budget);
        setSelectedProduct(projectData.product);
        setSelectedDescription(projectData.description);
        setTitle(projectData.name);
      }
    });
  }, [setTitle]);

  const handleEditProject = async (event) => {
    event.preventDefault();
    const projectObj = {
      name: selectedProjectName,
      userId: selectedClient,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      market: selectedMarket,
      product: selectedProduct,
      currency: "USD",
      budget: +selectedBudget,
      description: selectedDescription,
    };
    saveEditedProject(projectId, projectObj).then(() => {
      navigate(`/projects`);
    });
  };

  return (
    <div className="flex-nowrap w-auto ml-32 mt-4 mr-4 border-8 border-topbar rounded-3xl p-4">
      <select
        className="text-text w-full bg-edit hover:bg-hoveredit font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        name="client"
        value={selectedClient}
        onChange={(event) => {
          setSelectedClient(event.target.value);
        }}
      >
        {project.user && (
          <option value={project.user.id}>
            {`${project.user.firstName} ${project.user.lastName}`}
          </option>
        )}
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {`${client.firstName} ${client.lastName}`}
          </option>
        ))}
      </select>

      <div className="mt-5">
        <label className="text-sm text-gray-500">Start Date</label>
        <input
          type="date"
          id="small-input"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedStartDate}
          onChange={(event) => {
            setSelectedStartDate(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <label className="text-sm text-gray-500">End Date</label>
        <input
          type="date"
          id="small-input"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedEndDate}
          onChange={(event) => {
            setSelectedEndDate(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <select
          className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full ps-10 p-2.5"
          id="small-input"
          name="market"
          value={selectedMarket}
          onChange={(event) => {
            setSelectedMarket(event.target.value);
          }}
        >
          {project.market && (
            <option
              value={project.market}
            >{`Market: ${project.market}`}</option>
          )}
          {usStates.map((stateAbbreviation, index) => (
            <option key={index} value={stateAbbreviation}>
              {stateAbbreviation}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <input
          type="text"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          value={selectedProjectName}
          onChange={(event) => {
            setSelectedProjectName(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <input
          type="number"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          value={selectedBudget}
          onChange={(event) => {
            setSelectedBudget(+event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <input
          type="text"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          value={selectedProduct}
          onChange={(event) => {
            setSelectedProduct(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <input
          type="text"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          value={selectedDescription}
          onChange={(event) => {
            setSelectedDescription(event.target.value);
          }}
        />
      </div>
      <button
        className="mt-5 px-3 py-2 text-sm font-medium text-center text-text bg-edit rounded-lg hover:bg-hoveredit focus:ring-4 focus:outline-none focus:ring-blue-300 w-full"
        onClick={handleEditProject}
      >
        Save
      </button>
    </div>
  );
};
