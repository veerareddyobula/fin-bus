import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultHomeNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
      style={{ right: "0px", left: "0px" }}
    >
      <span className="navbar-brand" href="#/">
        <FontAwesomeIcon
          icon={["fas", "bus-alt"]}
        />{" "}
        Fin-Bus
      </span>
      <button
        className="navbar-toggler text-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon
          icon={["fas", "bars"]}
        />{" "}
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarTogglerDemo03"
      >
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
        <a href="#/signIn" className="btn btn-primary col-md-1">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default DefaultHomeNavbar;
