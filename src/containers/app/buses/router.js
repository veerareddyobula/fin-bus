import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import ManageFleetContainer from "./manage-buses";


class FleetRouter extends Component {
  render() {
    console.log("--==== App Component Render Method ====--");
    return (
      <div className="container-fluid p-0">
        <HashRouter>
          <Route
            exact
            path="/app/admin/buses/manage"
            component={ManageFleetContainer}
          />
        </HashRouter>
      </div>
    );
  }
}

export default FleetRouter;
