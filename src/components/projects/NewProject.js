import React from "react";
import { useEffect, useState } from "react";
import "./Project.css";
import { getAllUsers } from "../../services/userServices.js";
import { saveNewProject } from "../../services/projectServices.js";
import { useNavigate } from "react-router-dom";

export const NewProject = () => {
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
      if (res.isEmployee === true) {
        setClients(res);
      }
    });
  }, []);

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
    <form className="profile">
      <h2>Create New Project</h2>
      <fieldset>
        <select
          className="form-dropdown"
          name="client"
          onChange={(event) => {
            setSelectedClient(+event.target.value);
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
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Project Name"
            onChange={(event) => {
              setSelectedProjectName(event.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Budget</label>
          <input
            type="number"
            className="form-control"
            placeholder="Budget"
            onChange={(event) => {
              setSelectedBudget(event.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Product name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product name"
            onChange={(event) => {
              setSelectedProduct(event.target.value);
            }}
          />
        </div>
      </fieldset>
      {/* change this to a dropdown with statelist 
      https://shorturl.at/huV57 */}
      <fieldset>
        <div className="form-group">
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
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            onChange={(event) => {
              setSelectedStartDate(event.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
            onChange={(event) => {
              setSelectedEndDate(event.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={(event) => {
              setSelectedDescription(event.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-btn">
          <button className="form-btn btn-info" onClick={handleAddNewProject}>
            Add New Project
          </button>
        </div>
      </fieldset>
    </form>
  );
};
