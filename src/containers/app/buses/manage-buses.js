import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageBusesContainer = () => {
  return (
    <>
      <div className="section-header">
        <h1>Manage Buses</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active">
            <a href="#/">Dashboard</a>
          </div>
          <div className="breadcrumb-item">
            <a href="#/">Admin</a>
          </div>
          <div className="breadcrumb-item">Manage Buses</div>
        </div>
      </div>
      <div className="section-body">
        <div className="d-flex justify-content-end m-2">
          <a href="#/" className="btn btn-icon icon-left btn-info">
            <FontAwesomeIcon icon={["fas", "bus"]} /> Add New Bus
          </a>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="section-title mt-0">Registered Buses</div>
            <div>
                <table className="table table-sm">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Reg.Number</th>
                    <th scope="col">Seating Capacity</th>
                    <th scope="col">Seats/Sleeper</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>AP 31 KA 2691</td>
                    <td>36</td>
                    <td>8/28</td>
                    <td><a href="#/" className="btn btn-icon btn-sm"><FontAwesomeIcon icon={["fas", "edit"]} /></a></td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBusesContainer;
