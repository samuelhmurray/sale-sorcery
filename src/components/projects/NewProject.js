import React from "react";
import { useEffect, useState } from "react";
import "../../output.css";
import { getAllUsers } from "../../services/userServices.js";
import { saveNewProject } from "../../services/projectServices.js";
import { useNavigate } from "react-router-dom";

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
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    getAllUsers().then((res) => {
      if (Array.isArray(res)) {
        const nonEmployees = res.filter((user) => !user.isEmployee);
        setClients(nonEmployees);
      }
    });
  }, []);

  setTitle("Add new Project");

  const handleAddNewProject = async (event) => {
    event.preventDefault();

    const selectedStartDate = dateRange[0].startDate;
    const selectedEndDate = dateRange[0].endDate;

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
    <div className="flex-nowrap  w-96 m-5 ml-40 mt-10 border-8 border-topbar rounded-3xl p-4">
      <select
        class="text-text bg-edit hover:bg-hoveredit font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
        <label>Market</label>
        <input
          type="text"
          className="form-control"
          placeholder="Product name"
          onChange={(event) => {
            setSelectedMarket(event.target.value);
          }}
        />
      </div>

      <div className="mt-5">
        <label>Timeline</label>
      </div>

      <div className="mt-5">
        <input
          type="text"
          id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
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
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
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
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
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
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-300 focus:border-blue-300 "
          placeholder="Description"
          onChange={(event) => {
            setSelectedDescription(event.target.value);
          }}
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={handleAddNewProject}
          class="mt-5 px-3 py-2 text-sm font-medium text-center text-text bg-edit rounded-lg hover:bg-hoveredit focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Add
        </button>
      </div>
    </div>
  );
};
