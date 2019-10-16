import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const NavBar = () => (
  <div className="navbar">
    <a href="/">Feed</a>
    <a href="profile">Profile</a>
  </div>
);

const Feed = () => {
  console.log('--==== Template ::: Feed ====-- ')
  return (
    <div>
      <p className="page-info">
        This is the Feed page.
      </p>
    </div>
  )
};

const Profile = () => {
  console.log('--==== Template ::: Prof ====-- ')
  return (
    <div>
      <p className="page-info">
        This is the Profile page.
      </p>
    </div>
  )
};

class App extends Component {
  render() {
    console.log('--==== App Component Render Method ====--')
    return (
      <div>
        <NavBar />
        <BrowserRouter>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/" component={Feed}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;