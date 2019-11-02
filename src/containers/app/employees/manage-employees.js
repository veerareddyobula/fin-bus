import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageEmployeesContainer = () => {
  return (
    <>
      <div className="section-header">
        <h1>Manage Employees</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active">
            <a href="#/">Dashboard</a>
          </div>
          <div className="breadcrumb-item">
            <span>Admin</span>
          </div>
          <div className="breadcrumb-item">
            <span>Resources</span>
          </div>
          <div className="breadcrumb-item">Manage Employees</div>
        </div>
      </div>
      <div className="section-body">
        <div className="d-flex justify-content-end m-2">
          <a href="#/" className="btn btn-icon icon-left btn-info">
            <FontAwesomeIcon icon={["fas", "bus"]} /> Add New Employee
          </a>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="section-title mt-0">Organization Employees</div>
            <div>
                <table className="table table-sm">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Status</th>
                    <th scope="col">Observations</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Basha</td>
                    <td>Sadik</td>
                    <td>Driver</td>
                    <td>
                        <div className="text-wrap">
                        +91-8105598000, 9440949555
                        </div>
                    </td>
                    <td>Leave</td>
                    <td>
                        <a href="#/" className="m-1"><FontAwesomeIcon icon={["fas", "thumbs-up"]} /><span className="badge badge-success">4</span></a>
                        <a href="#/" className="m-1"><FontAwesomeIcon icon={["fas", "thumbs-down"]} /><span className="badge badge-danger">2</span></a>
                    </td>
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

export default ManageEmployeesContainer;
