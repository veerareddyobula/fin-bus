import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import AppDefaultContainer from "./default/home.js";
import FleetRouter from "./buses/router";
import EmployeeResourcesRouter from "./employees/router"

// const client = new ApolloClient({
//   uri: "http://localhost:4000/"
// });

class App extends Component {
  render() {
    console.log("--==== App Component Render Method ====--");
    return (
      <div className="container-fluid p-0">
        <AppDefaultContainer>
        <HashRouter>
          <Route
            exact
            path="/app/default/home"
            component={()=><div>I am Dashboard</div>}
          />
          <Route
            exact
            path="/app/admin/buses/*"
            component={FleetRouter}
          />
          <Route
            exact
            path="/app/admin/resource/employees/*"
            component={EmployeeResourcesRouter}
          />
        </HashRouter>
        </AppDefaultContainer>
      </div>
    );
  }
}

export default App;
