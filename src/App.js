import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import Default from "./containers/default";
import SignInContainer from "./containers/auth/signIn";
import SignUpContainer from "./containers/auth/signUp";
import AppRouter from "./containers/app/router";
import { client } from "./apollo-client";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/"
// });

class App extends Component {
  render() {
    console.log("--==== App Component Render Method ====--");
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <div className="container-fluid p-0">
            <HashRouter>
              <Route exact path="/app/*" component={AppRouter} />
              <Route exact path="/signUp" component={SignUpContainer} />
              <Route exact path="/signIn" component={SignInContainer} />
              <Route exact path="/" component={Default} />
            </HashRouter>
          </div>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
