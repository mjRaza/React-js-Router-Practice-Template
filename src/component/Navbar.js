import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ background: "#6200ee" }}>
          <Link to="#" className="brand-logo">
            Game
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
