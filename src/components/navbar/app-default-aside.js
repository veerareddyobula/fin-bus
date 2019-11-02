import React from "react";
import * as $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppDefaultASide = () => {
  React.useEffect(() => {
    if ($(".main-sidebar").length) {
      $(".main-sidebar .sidebar-menu li a.has-dropdown")
        .off("click")
        .on("click", function() {
          var me = $(this);
          var active = false;
          if (me.parent().hasClass("active")) {
            active = true;
          }

          $(".main-sidebar .sidebar-menu li.active > .dropdown-menu").slideUp(
            500,
            function() {
              return false;
            }
          );

          $(".main-sidebar .sidebar-menu li.active").removeClass("active");

          if (active === true) {
            me.parent().removeClass("active");
            me.parent()
              .find("> .dropdown-menu")
              .slideUp(500, function() {
                return false;
              });
          } else {
            me.parent().addClass("active");
            me.parent()
              .find("> .dropdown-menu")
              .slideDown(500, function() {
                return false;
              });
          }

          return false;
        });

      $(".main-sidebar .sidebar-menu li.active > .dropdown-menu").slideDown(
        500,
        function() {
          return false;
        }
      );
    }
  });
  return (
    <aside id="sidebar-wrapper">
      <div className="sidebar-brand">
        <a href="#/">
          <FontAwesomeIcon icon={["fas", "bus-alt"]} /> Fin-Bus
        </a>
      </div>
      <div className="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-header">Dashboard</li>
        <li className="nav-item dropdown active">
          <a href="#/" className="nav-link has-dropdown">
            <FontAwesomeIcon icon={["fas", "fire"]} />
            <span className="ml-2">Dashboard</span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="nav-link" href="index-0.html">
                General Dashboard
              </a>
            </li>
            <li className="active">
              <a className="nav-link" href="index.html">
                Ecommerce Dashboard
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-header">Admin</li>
        <li className="nav-item dropdown">
          <a href="#/" className="nav-link has-dropdown" data-toggle="dropdown">
            <FontAwesomeIcon icon={["fas", "bus"]} /> <span className="ml-2">Buses</span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="nav-link" href="#/app/admin/buses/manage">
                Manage Buses
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#/" className="nav-link has-dropdown" data-toggle="dropdown">
            <FontAwesomeIcon icon={["fas", "user-plus"]} /> <span className="ml-2">Resources</span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="nav-link" href="#/app/admin/resource/employees/manage">
                Manage Employees
              </a>
            </li>
            <li>
              <a className="nav-link" href="#/app/admin/resource/Offices/manage">
                Manage Offices
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
        <a
          href="https://getstisla.com/docs"
          className="btn btn-primary btn-lg btn-block btn-icon-split"
        >
          <FontAwesomeIcon icon={["fas", "rocket"]} /> Documentation
        </a>
      </div>
    </aside>
  );
};

export default AppDefaultASide;
