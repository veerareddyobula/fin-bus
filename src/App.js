import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";

import "./assets/css/style.css";
import "./assets/css/components.css";
// import "./assets/js/stisla.js";
// import "./assets/js/scripts.js";

import Default from "./containers/default";
import LoginPage from './pages/auth/login'
// import SignInContainer from "./containers/auth/signIn";
import SignUpContainer from "./containers/auth/signUp";
import AppRouter from "./containers/app/router";
import { client } from "./apollo-client";

library.add(fab, fas)

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
              <Route exact path="/signIn" component={LoginPage} />
              <Route exact path="/" component={Default} />
            </HashRouter>
          </div>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
