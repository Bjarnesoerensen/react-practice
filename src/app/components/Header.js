import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav">
            <ul className="nav-item nav-link">
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
