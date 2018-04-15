import React from "react";

export const Header = props => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
          <ul className="nav-item nav-link">
            <li>
              <a href="#">{props.homeLink}</a>
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
