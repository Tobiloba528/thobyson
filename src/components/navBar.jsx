import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll"

class NavBar extends Component {
  state = {
    isToggleOn: false
  };

  handleToggle = () => {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  };


  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          borderBottom: "2px solid  rgb(73, 137, 194)",
          width: "100%",
          background: "rgb(31, 52, 70)",
          color: "white"
        }}
      >
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ color: "rgb(179, 214, 223)" }}
        >
          THOBYSON
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            onClick={this.handleToggle}
          />
        </button>
        <div
          className={
            this.state.isToggleOn
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse hide"
          }
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              to="/"
              className="nav-item nav-link"
              style={{
                color: "rgb(179, 214, 223)",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Home
            </NavLink>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-item nav-link"
              style={{
                color: "rgb(179, 214, 223)",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-item nav-link"
              style={{
                color: "rgb(179, 214, 223)",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
 
export default NavBar;

