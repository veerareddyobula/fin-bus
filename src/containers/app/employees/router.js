import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import ManageEmployeesContainer from "./manage-employees";


class EmployeesRouter extends Component {
  render() {
    console.log("--==== App Component Render Method ====--");
    return (
      <div className="container-fluid p-0">
        <HashRouter>
          <Route
            exact
            path="/app/admin/resource/employees/manage"
            component={ManageEmployeesContainer}
          />
        </HashRouter>
      </div>
    );
  }
}

export default EmployeesRouter;
