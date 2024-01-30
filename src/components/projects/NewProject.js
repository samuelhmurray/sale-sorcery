import React from "react";
import { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "../../services/clientServices.js";

export const NewProject = () => {
  const [clients, setClients] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getAllClients().then((res) => {
      setClients(res);
    });
  }, []);

  // const handelSave = (event) => {
  //   event.preventDefault();
  //   console.log("clicked");

  //
  //   newProject(editedEmployee).then(() => {
  //     navigate(`/projects`);
  //   });
  // };

  return (
    <form className="profile">
      <h2>Create New Project</h2>
      <fieldset>
        <select name="client">
          <option id="0" value={0}>
            Assign Client
          </option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.firstName}, {client.lastName}
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
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Budget</label>
          <input type="number" className="form-control" placeholder="Budget" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Product name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product name"
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
          />
        </div>
      </fieldset>
      {/* make this type="date" and have a from and to input date? */}
      <fieldset>
        <div className="form-group">
          <label>Timeline</label>
          <input type="text" className="form-control" placeholder="Timeline" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info">Add New Project</button>
        </div>
      </fieldset>
    </form>
  );
};
