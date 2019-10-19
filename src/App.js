import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Default from './containers/default';
import SignInContainer from './containers/signIn'


class App extends Component {
  render() {
    console.log('--==== App Component Render Method ====--')
    return (
      <div className="container-fluid p-0">
        <HashRouter>
            <Route exact path="/signIn" component={SignInContainer}/>
            <Route exact path="/" component={Default}/>
        </HashRouter>
      </div>
    );
  }
}

export default App;