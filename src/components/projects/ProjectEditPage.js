import React, { useEffect, useState } from "react";
import {
  getProjectById,
  saveEditedProject,
} from "../../services/projectServices.js";
import { useNavigate, useParams } from "react-router-dom";
import "./Project.css";
import { getAllUsers } from "../../services/userServices.js";
import "../../output.css";

export const ProjectEditPage = () => {
  const [clients, setClients] = useState([]);
  const [project, setProject] = useState();
  const [selectedClient, setSelectedClient] = useState();
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [selectedTimeLine, setSelectedTimeLine] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((res) => {
      setClients(res);
    });
  }, []);

  useEffect(() => {
    getProjectById(projectId).then((projectData) => {
      setProject(projectData);
    });
  }, []);

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
    <form className="profile">
      <h2>Edit Project: {project?.name}</h2>
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
          <label>Timeline</label>
          <input
            type="text"
            className="form-control"
            placeholder="Timeline"
            onChange={(event) => {
              setSelectedTimeLine(event.target.value);
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
          <button className="form-btn btn-info" onClick={handleEditProject}>
            Save
          </button>
        </div>
      </fieldset>
    </form>
  );
};
