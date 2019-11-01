import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import AppDefaultContainer from "./default/home.js";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/"
// });

class App extends Component {
  render() {
    console.log("--==== App Component Render Method ====--");
    return (
      <div className="container-fluid p-0">
        <HashRouter>
          <Route
            exact
            path="/app/default/home"
            component={AppDefaultContainer}
          />
        </HashRouter>
      </div>
    );
  }
}

export default App;
