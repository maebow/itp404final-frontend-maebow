import React from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
