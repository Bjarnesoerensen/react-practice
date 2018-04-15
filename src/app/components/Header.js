import React from "react";
import { Link } from "react-router";

export const Header = props => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
          <ul className="nav-item nav-link">
            <li>
              <Link to={"/home"} activeStyle={{ color: "red" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/user/10"} activeClassName={"active"}>
                User
              </Link>
            </li>
            <li>
              <a href="#">{props.homeLink}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
