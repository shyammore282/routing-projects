import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header part</h1>
      <nav>
        <ul>
          <Link to="/">
            <li className="list">Home</li>
          </Link>
          <Link to="/about-us">
            <li className="list">About</li>
          </Link>
          <Link to="/session">
            <li className="list">session</li>
          </Link>
          <Link to="/course">
            <li className="list">Course</li>
          </Link>
          <Link to="/contact">
            <li className="list">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
