import React from "react";
import { useEffect, useState } from "react";
import "../../output.css";
import { getAllUsers } from "../../services/userServices.js";
import { saveNewProject } from "../../services/projectServices.js";
import { useNavigate } from "react-router-dom";
import { usStates } from "../../functions/UsStates.js";

export const NewProject = ({ setTitle }) => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(0);
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((res) => {
      if (Array.isArray(res)) {
        const nonEmployees = res.filter((user) => !user.isEmployee);
        setClients(nonEmployees);
      }
    });
    setTitle("Add New Project");
  }, [setTitle]);

  const handleAddNewProject = async (event) => {
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
    saveNewProject(projectObj).then((res) => {
      navigate(`/projects`);
    });
  };

  return (
    <div className="flex-nowrap  w-96 m-5 ml-44 mt-2 border-8 border-topbar rounded-3xl p-4">
      <select
        className="text-text bg-edit hover:bg-hoveredit font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        name="client"
        onChange={(event) => {
          setSelectedClient(+event.target.value);
          console.log(selectedClient);
        }}
      >
        <option id="0" value={0}>
          Assign Client
        </option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.firstName} {client.lastName}
          </option>
        ))}
      </select>

      <div className="mt-5">
        <label className="text-sm text-gray-500">Start Date</label>
        <input
          type="date"
          id="small-input"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
          onChange={(event) => {
            setSelectedStartDate(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <label className="text-sm text-gray-500">End Date</label>
        <input
          id="small-input"
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
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
          onChange={(event) => {
            setSelectedMarket(event.target.value);
          }}
        >
          <option id="0" value={0}>
            Market
          </option>
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
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          placeholder="Project Name"
          onChange={(event) => {
            setSelectedProjectName(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <input
          type="number"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          placeholder="Budget"
          onChange={(event) => {
            setSelectedBudget(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          placeholder="Product name"
          onChange={(event) => {
            setSelectedProduct(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          placeholder="Description"
          onChange={(event) => {
            setSelectedDescription(event.target.value);
          }}
        />
      </div>

      <div className="mt-5 px-3 py-2 text-sm font-medium text-center text-text bg-edit rounded-lg hover:bg-hoveredit focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        <button type="submit" onClick={handleAddNewProject}>
          Add
        </button>
      </div>
    </div>
  );
};
