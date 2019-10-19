import React from "react";
import styled from 'styled-components';

import SiteLogo from './../common/siteLogo';

const NavStyledTag = styled.nav`
  background: ${props => `linear-gradient(0deg,${props.colorTwo} 0,${props.colorOne} 100%)`};
`

const DefaultHomeNavbar = () => {
  return (
    <NavStyledTag className="navbar navbar-expand-lg navbar-light border-bottom"  colorOne="#fdfbfb" colorTwo="#ebedee">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <span className="navbar-brand" href="#/">
        <SiteLogo height="32rem" />
        Fin-Bus
      </span>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-4">
          <li className="nav-item active">
            <a className="nav-link" href="#/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              About Us
            </a>
          </li>
        </ul>
        <a href="#/signIn" className="btn btn-primary col-md-1">Sign In</a>
      </div>
    </NavStyledTag>
  );
};

export default DefaultHomeNavbar;
